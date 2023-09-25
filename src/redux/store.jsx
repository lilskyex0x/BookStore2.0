/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './books/bookSlice.jsx'
import categoriesReducer from './categories/categoriesSlice.jsx'

export const store = configureStore({
    reducer: {
        book: bookReducer,
        categories: categoriesReducer,
    }
})