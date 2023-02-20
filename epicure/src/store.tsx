import { configureStore } from "@reduxjs/toolkit";
import chefsReducer from "./features/chefsSlicer";
import restaurantsReducer from "./features/restaurantsSlicer";
import dishesReducer from "./features/dishesSlicer"
import {IRootObject} from "./data/interface"


export interface RootState {
    chefs: IRootObject['chefs']
    restaurants: IRootObject['restaurants']
    dishes: IRootObject['dishes']
}

export default configureStore({
  reducer: {
    chefs: chefsReducer,
    restaurants: restaurantsReducer,
    dishes: dishesReducer,
  },
});
