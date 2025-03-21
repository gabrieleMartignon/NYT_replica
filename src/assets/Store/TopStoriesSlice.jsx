import { createSlice } from "@reduxjs/toolkit";

const TopStoriesSlice = createSlice({
  name: "topStories",
  initialState: {
    news: {},
    error: null,
    loading: 1,
  },
  reducers: {
    setNews2: (state, action) => {
      state.news = action.payload;
    },
    setLoading2: (state, action) => {
      state.loading = action.payload;
    },
    setError2: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default TopStoriesSlice.reducer;

export const { setError2, setLoading2, setNews2 } = TopStoriesSlice.actions;
