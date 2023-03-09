import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import data from "../data/resturants.json";
import axios from "axios";
import {  IChefsState } from "../data/interface";
import { useDispatch } from "react-redux";

export const initialState:IChefsState = {
  loading: false,
  error: false,
  value: [] as IChefsState['value'],
  changedValue: [] as IChefsState['changedValue'],
};

const client = axios.create({
  baseURL: "http://localhost:8000/api/chefs",
});
// GET with Axios

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
export const chefsSelector = (state:IChefsState) => state.value;
export default chefsSlice.reducer;
export const api = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// fetch all items
