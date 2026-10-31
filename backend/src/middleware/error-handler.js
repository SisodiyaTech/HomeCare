import ApiError from "../utils/ApiError.js";
import logger from "../config/logger.js";

const errorHandler = (err, req, res, next) => {
  const statusCode =
    err instanceof ApiError
      ? err.statusCode
      : err.statusCode || err.status || 500;
  const message =
    statusCode >= 500
      ? "Internal Server Error"
      : err.message || "Something went wrong";

  if (res.headersSent) {
    return next(err);
  }

  logger.error("Request failed", {
    method: req.method,
    url: req.originalUrl,
    statusCode,
    message: err.message,
    stack: err.stack,
  });

  return res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || [],
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};

export default errorHandler;
