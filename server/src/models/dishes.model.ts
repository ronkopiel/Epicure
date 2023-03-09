import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import {IDish} from "../../../epicure/src/data/interface"


export const dishSchema = new Schema<IDish>({
    resturantID: {type: Number, required:true},
    name: {type: String, required:true},
    ingredients: {type: String, required:true},
    price: {type: Number, required:true},
    image: {type: String, required:true},
    isSpicy: {type: Boolean, required:true},
    isVegan: {type: Boolean, required:true},
    isVegitarian: {type: Boolean, required:true},
    id: {type: Number, required:true},
    service: {type: String, required:true},
})

export const dishModel = mongoose.model<IDish>("dishes", dishSchema);