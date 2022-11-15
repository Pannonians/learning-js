import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: [],
  page: 1,
};

export const tvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {
    addTvShows: (state, { payload }) => {
      state.index = [...state.index, ...payload];
      state.page = state.page + 1;
    },
    resetTvs: (state) => {
      state.index = initialState.index;
      state.page = initialState.page;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTvShows, resetTvs } = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
