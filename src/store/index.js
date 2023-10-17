import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User/slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
