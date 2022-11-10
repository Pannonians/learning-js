import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: [],
}

export const tvShowsSlice = createSlice({
  name: 'tvShows',
  initialState,
  reducers: {
    addTvShows: (state, {payload}) => {
      state.index = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTvShows } = tvShowsSlice.actions

export default tvShowsSlice.reducer