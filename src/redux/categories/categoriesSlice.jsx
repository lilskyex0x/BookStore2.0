import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const selectStatus = (state) => 'Under construction';

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
