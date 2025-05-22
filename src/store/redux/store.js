import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./MovieRedux..js"

export const store = configureStore({
    reducer: {
        movie: movieReducer
    }
})