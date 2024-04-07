import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { counterSliceReducer } from "../slices/counterSlice";
import { fakeStoreReducer } from "../slices/fakeStoreSlice";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const rootReducer = combineReducers({
  counter: counterSliceReducer,
  demoStore: fakeStoreReducer,
});

const persistConfig = {
  key: "demo",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

// Pass persistedReducer to persistStore
export const persistor = persistStore(store);
