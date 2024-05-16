import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { rootReducer } from "@/store/combineReducers ";

interface Trailer {
  key: string | null;
  id: string;
}
interface VideoState {
  trailers: Record<string, Trailer>;
  status: "idle" | "loading" | "successed" | "failed";
  error: string | null;
}
const initialState: VideoState = {
  trailers: {},
  status: "idle",
  error: null,
};
export const fetchTrailer = createAsyncThunk("video/fetchTrailer", async (movieId: string, { getState }) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
      params: {
        api_key: apiKey,
      },
    });
    if (!res) {
      throw new Error("Faild to fetching data");
    }
    const trailers = res.data.results;
    const officialTrailer = trailers.find((trailer: any) => trailer.official === true && trailer.type === "Trailer");
    return { id: movieId, key: officialTrailer ? officialTrailer.key : null };
  } catch (error) {
    throw error;
  }
});
export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrailer.fulfilled, (state, action: PayloadAction<Trailer>) => {
        state.status = "successed";
        state.trailers[action.payload.id] = action.payload;
      })
      .addCase(fetchTrailer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});
export const selectTrailerByKey = (state: rootReducer, movieId: string) => state.videos.trailers[movieId]?.key;
export const getVideosStatus = (state: rootReducer) => state.videos.status;
export const getVideosError = (state: rootReducer) => state.videos.error;

export default videoSlice.reducer;
