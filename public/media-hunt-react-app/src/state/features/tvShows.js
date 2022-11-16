import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: [],
  page: 1,
  details: {}
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
    addTvDetail: (state, {payload}) => {
      state.details[payload.id] = payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTvShows, resetTvs, addTvDetail } = tvShowsSlice.actions;

export default tvShowsSlice.reducer;
