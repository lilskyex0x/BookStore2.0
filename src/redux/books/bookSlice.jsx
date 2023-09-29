import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'JyK4gWmXitzJmJBDoo80';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const initialState = {
  books: [],
  status: 'idle',
};

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(API_URL);
  const booksArray = Object.keys(response.data).map((itemKey) => ({
    item_id: itemKey,
    ...response.data[itemKey][0],
  }));
  return booksArray;
});

export const addBookAsync = createAsyncThunk('books/addBook', async (bookData) => {
  await axios.post(API_URL, bookData);
  return bookData;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (item_Id) => {
  const deleteUrl = `${API_URL}/${item_Id}`;
  await axios.delete(deleteUrl);
  return item_Id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.books = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchBooksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBookAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default bookSlice.reducer;
