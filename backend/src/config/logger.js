import winston from "winston";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDir = path.resolve(__dirname, "../logs");

// Create logs directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const { combine, timestamp, errors, json, colorize, printf } = winston.format;

const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: combine(timestamp(), errors({ stack: true }), json()),

  transports: [
    // Save All Logs
    new winston.transports.File({
      filename: path.join(logDir, "combined.log"),
    }),
    // Save only errors log
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
    }),
  ],
});

// Show readable logs in the terminal during development
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: "HH:mm:ss" }),
        printf(
          ({ timestamp, level, message, stack }) =>
            `${timestamp} ${level}: ${stack || message}`,
        ),
      ),
    }),
  );
}

export default logger;
