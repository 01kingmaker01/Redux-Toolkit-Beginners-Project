// src/store/slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  product: null,
  idTitleOfProduct: null,
};

const fakeStoreSlice = createSlice({
  name: "fakeStore",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      return { ...state, product: action?.payload };
    },
    setIdTitleOfProduct: (state, { payload: { id, title } }) => {
      return {
        ...state,
        idTitleOfProduct: {
          id: Number(id),
          title: String(title).toUpperCase(),
        },
      };
    },
  },
});

export const { setProduct, setIdTitleOfProduct } = fakeStoreSlice?.actions;
export const fakeStoreReducer = fakeStoreSlice?.reducer;
