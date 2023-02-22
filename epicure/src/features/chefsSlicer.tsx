import { createSlice } from "@reduxjs/toolkit";
import data from "../data/resturants.json"
const initialChefs = data[0].chefs
export const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    value: initialChefs,
  },
  reducers: {
    setChefs: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChefs } = chefsSlice.actions;

export default chefsSlice.reducer;
