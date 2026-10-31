import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import ApiError from "../../utils/ApiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import { sendOtpEmail } from "../../utils/mailer.js";
import User from "./User.model.js";
import EmailVerification from "./EmailVerification.model.js";
import PasswordReset from "./PasswordReset.model.js";
import googleClient from "../../config/googleConfig.js";

const OTP_EXPIRY_MS = 10 * 60 * 1000;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 24 * 60 * 60 * 1000,
};

function generateOtp() {
  return String(crypto.randomInt(100000, 1000000));
}

function hashOtp(userId, otp) {
  return crypto.createHash("sha256").update(`${userId}:${otp}`).digest("hex");
}

function signAccessToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

function sanitizeUser(user) {
  const data = user.toObject();
  delete data.password;
  delete data.googleId;
  return data;
}

async function issueEmailOtp(user, purpose) {
  try {
    const otp = generateOtp();
    const tokenHash = hashOtp(user._id, otp);
    const expiresAt = new Date(Date.now() + OTP_EXPIRY_MS);

    if (purpose === "reset") {
      await PasswordReset.deleteMany({
        userId: user._id,
        usedAt: null,
      });

      await PasswordReset.create({
        userId: user._id,
        tokenHash,
        expiresAt,
      });
    } else {
      await EmailVerification.deleteMany({
        userId: user._id,
        usedAt: null,
      });

      await EmailVerification.create({
        userId: user._id,
        tokenHash,
        expiresAt,
      });
    }

    await sendOtpEmail({
      to: user.email,
      name: user.name,
      otp,
      purpose,
    });
  } catch (error) {
    console.error("Issue Email OTP Error:", error);
    throw error;
  }
}

async function consumeOtp({ Model, userId, otp }) {
  const tokenHash = hashOtp(userId, otp);
  const record = await Model.findOne({
    userId,
    usedAt: null,
    expiresAt: { $gt: new Date() },
  }).select("+tokenHash");

  if (!record || record.tokenHash !== tokenHash) {
    throw new ApiError(400, "Invalid or expired OTP");
  }

  record.usedAt = new Date();
  await record.save();
}

const RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    throw new ApiError(400, "All fields are required");
  }

  if (!emailRegex.test(email)) {
    throw new ApiError(400, "Invalid email address");
  }

  if (!["patient", "nurse", "admin"].includes(role)) {
    throw new ApiError(400, "Invalid role");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new ApiError(400, "User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
    authProviders: "password",
  });

  await issueEmailOtp(user, "verify");

  const createdUser = await User.findById(user._id).select("-password");
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        createdUser,
        "User registered successfully. Please verify the OTP sent to your email",
      ),
    );
});

const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user || !user.password) {
    throw new ApiError(401, "Invalid email or password");
  }

  if (user.accountStatus !== "active") {
    throw new ApiError(403, "Account is not active");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  if (!user.emailVerified) {
    await issueEmailOtp(user, "verify");
    throw new ApiError(
      403,
      "Email is not verified. A new OTP has been sent to your email",
    );
  }

  user.lastLoginAt = new Date();
  await user.save();

  const token = signAccessToken(user._id);

  res
    .status(200)
    .cookie("token", token, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: sanitizeUser(user), token },
        "Login successful",
      ),
    );
});

const VerifyOtp = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    throw new ApiError(400, "Email and OTP are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.emailVerified) {
    throw new ApiError(400, "Email is already verified");
  }

  await consumeOtp({ Model: EmailVerification, userId: user._id, otp });

  user.emailVerified = true;
  await user.save();

  const token = signAccessToken(user._id);

  res
    .status(200)
    .cookie("token", token, cookieOptions)
    .json(
      new ApiResponse(
        200,
        { user: sanitizeUser(user), token },
        "Email verified successfully",
      ),
    );
});

const ResendOtp = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  if (user.emailVerified) {
    throw new ApiError(400, "Email is already verified");
  }

  await issueEmailOtp(user, "verify");

  res.status(200).json(new ApiResponse(200, null, "OTP sent to your email"));
});

const ForgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const user = await User.findOne({ email }).select("+password");

  if (user?.password) {
    await issueEmailOtp(user, "reset");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        null,
        "If an account exists for this email, an OTP has been sent",
      ),
    );
});

const ResetPassword = asyncHandler(async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    throw new ApiError(400, "Email, OTP and new password are required");
  }

  if (newPassword.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new ApiError(400, "Invalid or expired OTP");
  }

  await consumeOtp({ Model: PasswordReset, userId: user._id, otp });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res
    .status(200)
    .json(new ApiResponse(200, null, "Password reset successfully"));
});

const googleAuth = asyncHandler(async (req, res) => {
  const { credential } = req.body;

  if (!credential) {
    return res.status(400).json({
      success: false,
      message: "Google credential is required",
    });
  }

  // 1. Verify Google ID token
  const ticket = await googleClient.verifyIdToken({
    idToken: credential,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  // 2. Extract verified user information
  const payload = ticket.getPayload();

  const { sub: googleId, email, email_verified, name, picture } = payload;

  if (!email || !email_verified) {
    return res.status(401).json({
      success: false,
      message: "Google email is not verified",
    });
  }

  // 3. Find existing Google user
  let user = await User.findOne({ googleId });

  if (!user) {
    // 4. Check whether email already exists
    user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (user) {
      // Link Google account with existing verified email
      user.googleId = googleId;
      user.avatar = picture;
      await user.save();
    } else {
      // 5. Create new Google user
      user = await User.create({
        name,
        email: email.toLowerCase(),
        googleId,
        avatar: picture,
        authProvider: "google",
      });
    }
  }

  // 6. Issue YOUR application's JWT cookies
  // Connect this to your existing access/refresh token logic.
  await issueAuthCookies(user, res);

  // 7. Send response
  return res.status(200).json({
    success: true,
    message: "Google login successful",
    data: {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    },
  });
});

export {
  RegisterUser,
  LoginUser,
  VerifyOtp,
  ResendOtp,
  ForgotPassword,
  ResetPassword,
  googleAuth,
};
