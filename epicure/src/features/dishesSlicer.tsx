import { createSlice } from "@reduxjs/toolkit";
import data from "../data/resturants.json";
const initialDishes = data[0].dishes;
const initialRestaurantDishIDs: number[] = [];
export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    initialDishes: initialDishes,
    restaurantDishes: initialDishes,
    serviceDishes: initialDishes,
    restaurantDishesIDs: initialRestaurantDishIDs,
  },
  reducers: {
    setRestaurantDishes: (state, action) => {
      state.restaurantDishesIDs = action.payload;
      const releventDishes = state.restaurantDishesIDs;
      state.restaurantDishes = state.initialDishes.filter((dish) =>
        releventDishes.includes(dish.id)
      );
      state.serviceDishes = state.restaurantDishes;
    },
    setServiceDishes: (state, action) => {
      console.log(state.serviceDishes);
      
      state.serviceDishes = state.restaurantDishes.filter(
        (dish) => dish.service === action.payload
      );
    },
    reInitializeDishes: (state) => {
      state.serviceDishes = state.initialDishes;
      state.restaurantDishes = state.initialDishes;
      state.restaurantDishesIDs = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { reInitializeDishes, setRestaurantDishes, setServiceDishes } =
  dishesSlice.actions;

export default dishesSlice.reducer;
