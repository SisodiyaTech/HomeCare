import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import logger from "./src/config/logger.js";
import connectDB from "./src/config/db.js";
import errorHandler from "./src/middleware/error-handler.js";
import authRouter from "./src/modules/auth/auth.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// Rate limiter — auth routes ke liye (max 20 requests per 15 minutes)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

// Global middleware
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message),
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Homecare is online", port });
  logger.info("Home route accessed");
});

app.use("/api/v1/auth", authLimiter, authRouter);

app.use(errorHandler);

// DB connect karo, phir server start karo
await connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
