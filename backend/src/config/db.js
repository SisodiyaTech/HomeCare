import mongoose from "mongoose";
import dns from "dns";
import dotenv from "dotenv";
import logger from "../config/logger.js";
dotenv.config();

const MongoURI = process.env.MONGODB_URI;
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    await mongoose.connect(MongoURI);
    logger.info(`MongoDB connected: ${mongoose.connection.host}`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(`MongoDB connection Error : ${error}`);
    logger.error("MongoDB connection failed", {
      message: error.message,
    });
    process.exit(1);
  }
};

export default connectDB;
