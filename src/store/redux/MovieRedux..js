import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../services/api';

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
    const response = await axiosInstance.get('/movie');
    return response.data;
});

const movieRedux = createSlice({
    name: 'movie',
    initialState: {
        allMovies: [],
        loading: false,
        detailClickingSeries: false,
        detailClickingFilm: false,
        versiPembayaran: null,
        isSubscribe: false,
    },
    reducers: {
        setDetailClickingSeries: (state, action) => {
            state.detailClickingSeries = action.payload;
        },
        setDetailClickingFilm: (state, action) => {
            state.detailClickingFilm = action.payload;
        },
        setVersiPembayaran: (state, action) => {
            state.versiPembayaran = action.payload;
        },
        setIsSubscribe: (state, action) => {
            state.isSubscribe = action.payload;
        },
        setAllMovies: (state, action) => {
            state.allMovies = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.allMovies = action.payload;
                state.loading = false;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const {
    setDetailClickingSeries,
    setDetailClickingFilm,
    setVersiPembayaran,
    setIsSubscribe,
    setAllMovies
} = movieRedux.actions;

export default movieRedux.reducer;
