//create combineReducer
import { combineReducers } from "@reduxjs/toolkit";
import genresSlice from "./features/genres/genresSlice";
import videoSlice from "./features/video/videoSlice";
import recommenedSlice from "./features/recommened/recommenedSlice";

export const rootReducer = combineReducers({
    genres: genresSlice,
    videos: videoSlice,
    recommendedMovies: recommenedSlice,

});
export type rootReducer = ReturnType<typeof rootReducer>;   
