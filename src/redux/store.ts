// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
