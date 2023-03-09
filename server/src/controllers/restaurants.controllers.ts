import {
    getRestaurants,
    createRestaurant,
    deleteRestaurant,
    updateRestaurant,
  } from "../services/restaurants.services";
  import  { Request, Response } from "express";
  
  export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurants = await getRestaurants();
      return res
        .status(200)
        .json(restaurants);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  
  export const addRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurants = createRestaurant(req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: restaurants,
          message: "Successfully Create Restaurant",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  
  export const removeRestaurants = async (req: Request, res: Response) => {
    try {
      const restaurants = deleteRestaurant(req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: restaurants,
          message: "Successfully Remove Restaurant",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  export const changeRestaurant = async (req: Request, res: Response) => {
    try {
      const restaurants = updateRestaurant(req.body._id, req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: restaurants,
          message: "Successfully Update Restaurant",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  