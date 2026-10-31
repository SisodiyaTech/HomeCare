import { z } from "zod";

// Register API ke liye rules
export const registerSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name Field is required" })
      .min(3, { message: "Name Must be minimum 3 characters" })
      .max(30),

    email: z
      .string({ required_error: "Email is Required" })
      .email({ message: "Write the correct email" }),

    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be 6 characters" }),

    role: z.enum(["patient", "nurse", "admin"], {
      required_error: "Role is required",
      message: "Role must be patient, nurse or admin",
    }),
  }),
});
