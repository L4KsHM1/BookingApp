import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../api/controllers/usercontroller.js";

export const userRouter = express.Router();

//UPDATE
userRouter.put("/:id", updateUser);
//DELETE
userRouter.delete("/:id", deleteUser);

//GET
userRouter.get("/:id", getUser);
//GET ALL

userRouter.get("/", getUsers);
