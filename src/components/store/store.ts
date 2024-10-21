import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "./memberSlice";

const store = configureStore({
  reducer : {
    memberDetail : memberSlice
  }
})
export default store