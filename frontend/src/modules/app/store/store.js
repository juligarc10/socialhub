import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../entities/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
