import { createSlice } from "@reduxjs/toolkit";

const comingSoonSlice = createSlice({
  name: "comingSoon",
  initialState: false,
  reducers: {
    showComingSoon: (state) => {
      return true;
    },
    hideComingSoon: (state) => {
      return false;
    },
  },
});

export const { showComingSoon, hideComingSoon } = comingSoonSlice.actions;
export default comingSoonSlice.reducer;
