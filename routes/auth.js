import express from "express";

export const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("hello auth");
});
authRouter.get("/register", (req, res) => {
  res.send("hello,this is auth register");
});
