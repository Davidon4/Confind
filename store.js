import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import filterReducer from "./feature/initialFilter";

export const store = configureStore({
  reducer: {
    filterReducer,
  },
});

setupListeners(store.dispatch);
