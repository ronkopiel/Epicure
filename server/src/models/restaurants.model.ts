import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import {IRestaurant} from "../../../epicure/src/data/interface"

export interface IStudant{
    first: string;
    last:string;
    email:string;
    password:string;
}

export const restaurantSchema = new Schema<IRestaurant>({
    id: {type: Number, required:true},
    name: {type: String, required:true},
    img: {type: String, required:true},
    openingHour: {type: Number, required:true},
    closingHour: {type: Number, required:true},
    address: {type: String, required:true},
    rating: {type: Number, required:true},
    chefID: {type: Number, required:true},
    viewCount: {type: Number, required:true},
    signatureDishID:{type: Number, required:true},
    isNewRestaurant: {type: Boolean, required:true},
    dishes: {type: [Number], required:true},
})

export const restaurantModel = mongoose.model<IRestaurant>("restaurants", restaurantSchema);