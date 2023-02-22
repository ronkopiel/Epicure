import { createSlice } from "@reduxjs/toolkit";
import data from "../data/resturants.json"
const initialDishes = data[0].dishes
const initialRestaurantDishes:number[] = []
export const dishesSlice = createSlice({
  name: "chefs",
  initialState: {
    dishes: initialDishes,
    restaurantDishes: initialRestaurantDishes,
  },
  reducers: {
    setRestaurantDishes: (state, action) => {
      state.restaurantDishes = action.payload;
      state.dishes = state.dishes.filter((dish)=>state.restaurantDishes.includes(dish.id))
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurantDishes } = dishesSlice.actions;

export default dishesSlice.reducer;
