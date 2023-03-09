import express, { Request, Response } from "express";
import {
  getAllRestaurants, addRestaurants, removeRestaurants, changeRestaurant
} from "../controllers/restaurants.controllers";
var bcrypt = require("bcrypt");

const router = express.Router();

router.get("/",getAllRestaurants );

router.post("/", addRestaurants);

router.delete("/",removeRestaurants );

router.put("/", changeRestaurant);

export default router;
