import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: [],
  page: 1,
  details: {}
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.index = [...state.index, ...payload];
      state.page = state.page + 1;
    },
    resetMovies: (state) => {
      state.index = initialState.index;
      state.page = initialState.page;
    },
    addMovieDetail: (state, {payload}) => {
      state.details[payload.id] = payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addMovies, resetMovies, addMovieDetail } = moviesSlice.actions;

export default moviesSlice.reducer;
