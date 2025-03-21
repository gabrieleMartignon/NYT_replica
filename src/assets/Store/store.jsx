import { configureStore } from "@reduxjs/toolkit";
import menuButtonReducer from "./menuButtonSlice";
import comingSoonReducer from "../Store/ComingSoonSlice";
import feedNewsReducer from "../Store/FeedNewsSlice";
import TopStoriesReducer from "../Store/TopStoriesSlice";
import sectionReducers from "./sectionSelectedSlice";


const store = configureStore({
  reducer: {
    menuButton: menuButtonReducer,
    comingSoon: comingSoonReducer,
    feedNews: feedNewsReducer,
    topStories: TopStoriesReducer,
    feedNewsSection: sectionReducers.feedNewsSection,
    topStoriesSection: sectionReducers.topStoriesSection
  }
});

export default store;
