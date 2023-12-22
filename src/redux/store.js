import { configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { profileReducer, userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    admin: adminReducer,
  },
});

export default store;
export const server = "https://blogme-q0gd.onrender.com/api/v1";
