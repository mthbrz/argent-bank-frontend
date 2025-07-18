import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";

export default combineReducers ({
  user : userReducer// Add your reducers here
    // Example: user: userReducer,
});