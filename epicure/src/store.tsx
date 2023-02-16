import { configureStore } from "@reduxjs/toolkit";
import chefsReducer from "./features/chefsSlicer";
import restaurantsReducer from "./features/restaurantsSlicer";
import dishesReducer from "./features/dishesSlicer"
import {RootObject} from "./data/interface"


export interface RootState {
    chefs: RootObject['chefs']
    restaurants: RootObject['restaurants']
    dishes: RootObject['dishes']
}

export default configureStore({
  reducer: {
    chefs: chefsReducer,
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
  },
});
