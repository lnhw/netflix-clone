import { rootReducer } from "@/store/combineReducers ";
import { Genres } from "@/types/movie";
import { createSlice, createAsyncThunk, PayloadAction, Store } from "@reduxjs/toolkit";
import axios from "axios";
interface GenreState {
  genres: Genres[];
  status: "idle" | "loading" | "successed" | "failed";
  error: string | null;
}
const initialState: GenreState = {
  genres: [],
  status: "idle",
  error: null,
};
//Asynchormous the thunk action
export const getGenres = createAsyncThunk("genres/getGenres", async () => {
  const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  return res.data.genres as Genres[];
});
export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    resetGenresState: (state: GenreState) => {
      state.genres = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGenres.fulfilled, (state, action: PayloadAction<Genres[]>) => {
        state.status = "successed";
        state.genres = action.payload;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});
// Actions
export const { resetGenresState } = genresSlice.actions;

// Selectors
export const selectAllGenres = (state: rootReducer) => state.genres.genres;
export const getGenresStatus = (state: rootReducer) => state.genres.status;
export const getGenresError = (state: rootReducer) => state.genres.error;

export default genresSlice.reducer;
