import { configureStore } from "@reduxjs/toolkit";
import movies from "./features/movies";
import tvShows from "./features/tvShows";

export const store = configureStore({
  reducer: {
    movies,
    tvShows,
  },
});
