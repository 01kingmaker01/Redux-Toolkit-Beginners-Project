import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "../slices/counterSlice";
import { fakeStoreReducer } from "../slices/fakeStoreSlice";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    demoStore: fakeStoreReducer,
    enhancers: [composeEnhancers],
  },
  // Other configuration options (middleware, dev tools, etc.) can be added here
});
