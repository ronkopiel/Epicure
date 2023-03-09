import {
    getDishes,
    createDish,
    deleteDish,
    updateDish,
  } from "../services/dishes.services";
  import  { Request, Response } from "express";
  
  export const getAllDishes = async (req: Request, res: Response) => {
    try {
      const dishes = await getDishes();
      return res
        .status(200)
        .json(dishes);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  
  export const addDishes = async (req: Request, res: Response) => {
    try {
      const dishes = createDish(req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: dishes,
          message: "Successfully Created Dish",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  
  export const removeDishes = async (req: Request, res: Response) => {
    try {
      const dishes = deleteDish(req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: dishes,
          message: "Successfully Removed Dish",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  export const changeDish = async (req: Request, res: Response) => {
    try {
      const dish = updateDish(req.body._id, req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: dish,
          message: "Successfully Update Dish",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  