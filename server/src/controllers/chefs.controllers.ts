import {
    getChefs,
    createChef,
    deleteChef,
    updateChef,
  } from "../services/chefs.services";
  import { Request, Response } from "express";
  
  export const getAllChefs = async (req: Request, res: Response) => {
    try {
      const chefs = await getChefs();
      return res
        .status(200)
        .json(chefs);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  
  export const addChefs = async (req: Request, res: Response) => {
    try {
      const chefs = createChef(req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: chefs,
          message: "Successfully Created Chef",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  
  export const removeChefs = async (req: Request, res: Response) => {
    try {
      const chefs = deleteChef(req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: chefs,
          message: "Successfully Removed Chef",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  export const changeChef = async (req: Request, res: Response) => {
    try {
      const chefs = updateChef(req.body._id, req.body);
      return res
        .status(200)
        .json({
          status: 200,
          data: chefs,
          message: "Successfully Update Studant",
        });
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };
  