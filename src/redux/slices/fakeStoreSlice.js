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
    setIdTitleOfProduct: (state, action) => {
      console.log({ action });
      const { id, title } = action?.payload;
      return {
        ...state,
        idTitleOfProduct: {
          id: id,
          title: title,
        },
      };
    },
  },
});

export const { setProduct, setIdTitleOfProduct } = fakeStoreSlice?.actions;
export const fakeStoreReducer = fakeStoreSlice?.reducer;
