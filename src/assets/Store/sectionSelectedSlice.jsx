import { createSlice } from "@reduxjs/toolkit";


const feedNewsSection = createSlice({
  name: "feedNewsSection",
  initialState: [false, "World"],
  reducers: {
    toggleSection: (state) => {
      state[0] = !state[0];
    },
    changeSectionFeedNews: (state, action) => {
      state[1] = action.payload,
        state[0] = !state[0];
    },
  },
});

const topStoriesSection = createSlice({
  name: "TopStoriesSection",
  initialState: [false, "World"],
  reducers: {
    toggleSection: (state) => {
      state[0] = !state[0]
    },
    changeSectionTopStories: (state, action) => {
      state[1] = action.payload,
        state[0] = !state[0]

    },
  },
});

export default {
  feedNewsSection: feedNewsSection.reducer,
  topStoriesSection: topStoriesSection.reducer,
};

export const { toggleSection: toggleSectionFeedNews, changeSectionFeedNews } = feedNewsSection.actions;

export const { toggleSection: toggleSectionTopStories, changeSectionTopStories, } = topStoriesSection.actions;
