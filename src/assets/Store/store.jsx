// store.js
import { configureStore } from "@reduxjs/toolkit";
import menuButtonReducer from "./menuButtonSlice";
import comingSoonReducer from "../Store/ComingSoonSlice";
import feedNewsReducer from "../Store/FeedNewsSlice";
import TopStoriesReducer from "../Store/TopStoriesReducer";

const store = configureStore({
  reducer: {
    menuButton: menuButtonReducer,
    comingSoon: comingSoonReducer,
    feedNews: feedNewsReducer,
    topStories: TopStoriesReducer,
  },
});

export default store;
