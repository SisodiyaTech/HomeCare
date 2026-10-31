import nodemailer from "nodemailer";
import logger from "../config/logger.js";

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) return null;

  transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return transporter;
}

export async function sendMail({ to, subject, html, text }) {
  const from =
    process.env.MAIL_FROM ||
    process.env.SMTP_USER ||
    "HomeCare <noreply@homecare.local>";
  const mailer = getTransporter();

  if (!mailer) {
    logger.warn(`Email skipped (SMTP not configured): ${subject} -> ${to}`);
    if (process.env.NODE_ENV !== "production") {
      logger.info(`[DEV] Email preview [${to}]: ${text || html}`);
      return;
    }
    throw new Error("Email service is not configured");
  }

  try {
    await mailer.sendMail({ from, to, subject, html, text });
    logger.info(`Email sent: ${subject} -> ${to}`);
  } catch (error) {
    // In development: log the email content to console instead of crashing
    if (process.env.NODE_ENV !== "production") {
      logger.warn(
        `[DEV] SMTP failed (${error.message}). Printing email to console instead.`,
      );
      console.log(`Email did't send because : ${error.message}`);
      return;
    }
    // In production: rethrow so the request fails properly
    throw error;
  }
}

export async function sendOtpEmail({ to, name, otp, purpose }) {
  // Always log OTP in dev for easy testing (since SMTP may not be configured)
  // if (process.env.NODE_ENV !== "production") {
  //   console.log(
  //     `\n🔑 [DEV OTP] Email: ${to} | Purpose: ${purpose} | OTP: ${otp}\n`,
  //   );
  //   // Write OTP to a temp file for automated testing
  //   const { writeFileSync } = await import("fs");
  //   writeFileSync("./dev-otp.txt", `${to}:${purpose}:${otp}`);
  // }
  const titles = {
    verify: "Verify your HomeCare email",
    reset: "Reset your HomeCare password",
  };
  const subject = titles[purpose] || "Your HomeCare OTP";
  const text = `Hi ${name || "there"}, your OTP is ${otp}. It expires in 10 minutes.`;
  const html = `
    <p>Hi ${name || "there"},</p>
    <p>Your HomeCare OTP is:</p>
    <h2 style="letter-spacing:4px">${otp}</h2>
    <p>This code expires in 10 minutes. If you did not request it, you can ignore this email.</p>
  `;

  await sendMail({ to, subject, html, text });
}
