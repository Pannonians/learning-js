import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.index = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
