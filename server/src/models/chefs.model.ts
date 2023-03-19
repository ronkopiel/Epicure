import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import {IChef} from "../../../epicure/src/data/interface"

export const chefSchema = new Schema<IChef>({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    portrait: {type: String, required:true},
    isChefOfTheWeek: {type: Boolean, required:true},
    isNewChef: {type: Boolean, required:true},
    viewCount: {type: Number, required:true},
    resturants: {type: [Number], required:true},
    id: {type: Number, required:true},
    chefDescription: {type: String, required:true}
})

export const chefModel = mongoose.model<IChef>("chefs", chefSchema);