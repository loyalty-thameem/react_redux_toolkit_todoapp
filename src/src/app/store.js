import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/reducers/todoSlider";
export default configureStore({
  reducer: {
    toDo: todoReducers,
  },
});
