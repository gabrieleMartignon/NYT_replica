import { createSlice } from "@reduxjs/toolkit";

const FeedNewsSlice = createSlice({
  name: "FeedNews",
  initialState: {
    news: {},
    loading: true,
    error: null,
  },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default FeedNewsSlice.reducer;

export const { setError, setLoading, setNews } = FeedNewsSlice.actions;
