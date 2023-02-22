import { createSlice } from "@reduxjs/toolkit";
import data from "../data/resturants.json"
const initialDishes = data[0].dishes
const initialRestaurantDishes:number[] = []
export const dishesSlice = createSlice({
  name: "chefs",
  initialState: {
    dishes: initialDishes,
    changedDishes:initialDishes,
    restaurantDishes: initialRestaurantDishes,
  },
  reducers: {
    setRestaurantDishes: (state, action) => {
      state.restaurantDishes = action.payload;
      const releventDishes= state.restaurantDishes
      state.changedDishes = state.dishes.filter((dish)=>releventDishes.includes(dish.id,0))
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurantDishes } = dishesSlice.actions;

export default dishesSlice.reducer;
