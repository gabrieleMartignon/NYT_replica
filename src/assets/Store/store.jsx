// store.js
import { configureStore } from "@reduxjs/toolkit";
import menuButtonReducer from "./menuButtonSlice";
import comingSoonReducer from "../Store/ComingSoonSlice"; 
import feedNewsReducer from '../Store/FeedNewsSlice'

const store = configureStore({
  reducer: {
    menuButton: menuButtonReducer,
    comingSoon: comingSoonReducer,  
    feedNews: feedNewsReducer
  },
});

export default store;