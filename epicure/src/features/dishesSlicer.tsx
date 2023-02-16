import { createSlice } from "@reduxjs/toolkit";
import data from "../data/resturants.json"
const initialDishes = data[0].dishes
export const dishesSlice = createSlice({
  name: "chefs",
  initialState: {
    value: initialDishes,
  },
  reducers: {
    setDishes: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDishes } = dishesSlice.actions;

export default dishesSlice.reducer;
