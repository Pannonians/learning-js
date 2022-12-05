import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsReducer";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});
export default store;
