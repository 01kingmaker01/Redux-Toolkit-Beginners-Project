// src/store/slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => ({ count: state?.count + 1 }),
    decrement: (state) => ({ count: state?.count - 1 }),
  },
});

export const { increment, decrement } = counterSlice?.actions;
export const counterSliceReducer = counterSlice?.reducer;
