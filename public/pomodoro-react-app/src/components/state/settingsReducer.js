import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  duration: 1500,
  shortBreak: 300,
  longBreak: 900,
  longBreakDelay: 4,
  autoPomodoros: false,
  autoBreaks: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.duration = action.payload.duration;
      state.shortBreak = action.payload.shortBreak;
      state.longBreak = action.payload.longBreak;
      state.longBreakDelay = action.payload.longBreakDelay;
      state.autoPomodoros = !state.autoPomodoros;
      state.autoBreaks = !state.autoBreaks;
    },
  },
});

export const { setSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
