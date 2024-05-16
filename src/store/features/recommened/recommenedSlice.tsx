
import { rootReducer } from "@/store/combineReducers ";
import { Movie } from "@/types/movie";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface RecommendMovieState {
    movies: Movie[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
const initialState: RecommendMovieState = {
    movies: [],
    status: "idle",
    error: null,
}
export const fetchRecommendedMovies = createAsyncThunk<Movie[], number, { rejectValue: string }>(
    "recommendedMovies/fetchRecommendedMovies",
    async (movieId: number, { rejectWithValue }) => {
        try {
            const res = await axios.get<{ results: Movie[]; }>(`https://api.tmdb.org/3/movie/${movieId}/recommendations`, {
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                },
            });
            return res.data.results;
        } catch (error) {
            if (axios.isAxiosError(error) && error.message) {
                return rejectWithValue(error.response?.data as string);
            } else {
                return rejectWithValue("An unknown error occurred");
            }
        }
    }
);

const recommendMoviesSlice = createSlice({
    name: "recommendMovies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendedMovies.pending, (state: RecommendMovieState) => {
                state.status = 'loading';
            })
            .addCase(fetchRecommendedMovies.fulfilled, (state: RecommendMovieState, action: PayloadAction<Movie[]>) => {
                state.status = 'succeeded';
                state.movies = action.payload;
            })
            .addCase(fetchRecommendedMovies.rejected, (state: RecommendMovieState, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    }
});
export const selectAllRecommendedMovies = (state: rootReducer) => state.recommendedMovies.movies;
export const selectAllRecommendedMoviesSlice = (state: rootReducer) => state.recommendedMovies.status;
export default recommendMoviesSlice.reducer;