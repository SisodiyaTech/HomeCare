import mongoose from "mongoose";
import { required } from "zod/mini";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 254,
    },

    // Google-only users ke liye passwordHash null ho sakta hai.
    password: {
      type: String,
      required: function () {
        return this.authProvider === "local";
      },
      select: false,
    },
    authProvider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
      required: true,
    },
    googleId: {
      type: String,
      default: null,
      select: false,
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    phone: {
      type: String,
      default: null,
      trim: true,
    },

    phoneVerified: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["patient", "nurse", "admin"],
      default: "patient",
      required: true,
    },

    accountStatus: {
      type: String,
      enum: ["active", "suspended", "disabled"],
      default: "active",
    },

    profileStatus: {
      type: String,
      enum: ["incomplete", "complete"],
      default: "incomplete",
    },

    lastLoginAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Google ID ko unique rakho, jab woh present ho.
userSchema.index(
  { googleId: 1 },
  {
    unique: true,
    partialFilterExpression: {
      googleId: { $type: "string" },
    },
  },
);

const User = mongoose.model("User", userSchema);

export default User;
