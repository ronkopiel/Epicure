import { createSlice } from "@reduxjs/toolkit";
import { IRestaurant } from "../data/interface";
import { api } from "./chefsSlicer";
const fetchRestaurants = () => {
  const response = api
    .get("/restaurants")
    .then((response) => {
      return response.data[0].restaurants;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

const initialRestaurants: IRestaurant[] = await fetchRestaurants();
const initialRestaurant = initialRestaurants[0];
const date = new Date();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: initialRestaurants,
    changedValue: initialRestaurants,
    chosenRestaurant: initialRestaurant,
  },
  reducers: {
    sortPopularity: (state) => {
      state.changedValue = state.changedValue.sort(
        (a, b) => b.viewCount - a.viewCount
      );
    },
    getNewRestaurants: (state) => {
      state.changedValue = state.value.filter(
        (restaurant) => restaurant.isNewRestaurant
      );
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
    getRestaurant: (state, action) => {
      const restaurantName: string = action.payload;
      const restaurantArray = state.changedValue.filter(
        (resaturant) => resaturant.name === restaurantName
      );
      if (restaurantArray.length === 1) {
        const restaurant = restaurantArray.pop();
        state.chosenRestaurant = restaurant!;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getOpenRestaurants,
  reInitializeRestaurants,
  getNewRestaurants,
  sortPopularity,
  getRestaurant,
} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
