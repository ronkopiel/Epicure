import { createSlice } from "@reduxjs/toolkit";
import data from "../data/resturants.json";

const initialRestaurants = data[0].restaurants;

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: initialRestaurants,
    changedValue: initialRestaurants,
  },
  reducers: {
    sortPopularity: (state) => {
      state.changedValue = state.value.sort(
        (a, b) => b.viewCount - a.viewCount
      );
    },
    getNewRestaurants: (state) => {
      state.changedValue = state.value.filter((restaurant) => restaurant.isNew);
    },
    reInitializeRestaurants: (state) => {
      state.changedValue = state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  reInitializeRestaurants,
  getNewRestaurants,
  sortPopularity,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
