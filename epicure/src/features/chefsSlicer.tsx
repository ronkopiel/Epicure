import { createSlice } from "@reduxjs/toolkit";
import data from "../data/resturants.json";

const initialChefs = data[0].chefs;

export const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    value: initialChefs,
    changedValue: initialChefs,
  },
  reducers: {
    sortViewCount: (state) => {
      state.changedValue = state.changedValue.sort(
        (a, b) => b.viewCount - a.viewCount
      );
    },
    getNewChefs: (state) => {
      state.changedValue = state.value.filter((chef) => chef.isNew);
    },
    reInitializeChefs: (state) => {
      state.changedValue = state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reInitializeChefs, getNewChefs, sortViewCount } =
  chefsSlice.actions;

export default chefsSlice.reducer;
