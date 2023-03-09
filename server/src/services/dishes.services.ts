import { dishModel } from "../../src/models/dishes.model";
import {IDish} from "../../../epicure/src/data/interface"
export const getDishes = async () => {
  try {
    const dishes = await dishModel.find();
    return dishes;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const createDish = async (dish: IDish) => {
  const _dish = new dishModel(dish);
  try {
    await _dish.save();
    return _dish;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const deleteDish = async (dishID: string) => {
  try {
    await dishModel.findByIdAndDelete(dishID);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const updateDish = async (id:string, dish:IDish) => {
  try {
   const _dish =  await dishModel.findByIdAndUpdate(id, dish);
   if(_dish){
    return (_dish)
   }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
