import { chefModel } from "../../src/models/chefs.model";
import {IChef} from "../../../epicure/src/data/interface"

export const getChefs = async () => {
  try {
    const chefs = await chefModel.find();
    return chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const createChef = async (chef: IChef) => {
  const _chef = new chefModel(chef);
  try {
    await _chef.save();
    return _chef;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const deleteChef = async (chefID: string) => {
  try {
    await chefModel.findByIdAndDelete(chefID);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const updateChef = async (id:string, chef:IChef) => {
  try {
   const _chef =  await chefModel.findByIdAndUpdate(id, chef);
   if(_chef ){
    return (_chef )
   }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
