import express from "express";

export const roomRouter = express.Router();

roomRouter.get("/", (req, res) => {
  res.send("hello rooms");
});
