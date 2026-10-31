import express from "express";
import {
  RegisterUser,
  LoginUser,
  VerifyOtp,
  ResendOtp,
  ForgotPassword,
  ResetPassword,
  googleAuth,
} from "./auth.controller.js";
import validate from "../../middleware/validate.js";
import { registerSchema } from "./auth.validation.js";

const router = express.Router();

router.post("/register", validate(registerSchema), RegisterUser);
router.post("/login", LoginUser);
router.post("/google", googleAuth);
router.post("/verify-otp", VerifyOtp);
router.post("/resend-otp", ResendOtp);
router.post("/forgot-password", ForgotPassword);
router.post("/reset-password", ResetPassword);

export default router;
