import express from "express";

export const authRouter = express.Router();

authRouter.get("/register", register);
