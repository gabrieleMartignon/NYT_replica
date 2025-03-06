import { createSlice } from "@reduxjs/toolkit";

const menuButtonSlice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state;
    },
  },
});

export const { toggle } = menuButtonSlice.actions;
export default menuButtonSlice.reducer;
