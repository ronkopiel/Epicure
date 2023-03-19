import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IChefsState } from "../data/interface";


export const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});
const fetchChefs = () => {
  const response = api
  .get("/chefs")
  .then((response) => {
    return response.data[0].chefs
  })
  .catch((error) => {
    console.log(error);
  }
  )
  return response;
}
const chefs = await fetchChefs()
export const initialState: IChefsState = {
  loading: false,
  error: false,
  value: chefs,
  changedValue: chefs
};

export const chefsSlice = createSlice({
  name: "chefs",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setChefs: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.value = payload;
      state.changedValue = state.value;
    },
    setError: (state) => {
      state.error = true;
    },
    sortViewCount: (state) => {
      state.changedValue = state.changedValue.sort(
        (a, b) => b.viewCount - a.viewCount
      );
    },
    getNewChefs: (state) => {
      state.changedValue = state.value.filter((chef) => chef.isNewChef);
    },
    reInitializeChefs: (state) => {
      state.changedValue = state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  reInitializeChefs,
  getNewChefs,
  sortViewCount,
  setLoading,
  setChefs,
  setError,
} = chefsSlice.actions;
export const chefsSelector = (state: IChefsState) => state.value;
export default chefsSlice.reducer;

// fetch all items
