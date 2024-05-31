import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { userRouter } from "./routes/user.js";
import { authRouter } from "./routes/auth.js";
import { hotelRouter } from "./routes/hotels.js";
import { roomRouter } from "./routes/rooms.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
}); // Reconnect on disonnection

// Middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connectToDb();

  console.log("Connected to backend.");
});
