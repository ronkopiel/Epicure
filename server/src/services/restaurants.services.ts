import { restaurantModel } from "../../src/models/restaurants.model";
import {IRestaurant} from "../../../epicure/src/data/interface"
export const getRestaurants = async () => {
  try {
    const restaurants = await restaurantModel.find();
    return restaurants;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const createRestaurant = async (restaurant: IRestaurant) => {
  const _restaurant = new restaurantModel(restaurant);
  try {
    await _restaurant.save();
    return _restaurant;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const deleteRestaurant = async (restaurantID: string) => {
  try {
    await restaurantModel.findByIdAndDelete(restaurantID);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const updateRestaurant = async (id:string, restaurant:IRestaurant) => {
  try {
   const _restaurant =  await restaurantModel.findByIdAndUpdate(id, restaurant);
   if(_restaurant){
    return (_restaurant)
   }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
