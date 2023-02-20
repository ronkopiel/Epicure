import { createSlice } from "@reduxjs/toolkit";
import data from "../data/resturants.json";

const initialRestaurants = data[0].restaurants;
const date = new Date();

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
    getOpenRestaurants: (state) => {
      state.changedValue = state.value.filter(
        (restaurant) =>
          restaurant.openingHour <= date.getHours() &&
          restaurant.closingHour > date.getHours()
      );
    },
    reInitializeRestaurants: (state) => {
      state.changedValue = state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getOpenRestaurants,
  reInitializeRestaurants,
  getNewRestaurants,
  sortPopularity,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
