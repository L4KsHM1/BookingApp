import express from "express";
import Hotel from "../api/models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../api/controllers/hotelcontroller.js";

export const hotelRouter = express.Router();

//CREATE
hotelRouter.post("/", createHotel);
//UPDATE
hotelRouter.put("/:id", updateHotel);
//DELETE
hotelRouter.delete("/:id", deleteHotel);

//GET
hotelRouter.get("/:id", getHotel);
//GET ALL

hotelRouter.get("/", getHotels);
