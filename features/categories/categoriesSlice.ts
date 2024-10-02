import { createSlice } from '@reduxjs/toolkit'
import { CategoryInterface } from '../../interfaces/categories.interface';


const categoriesData: CategoryInterface[] = [];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: categoriesData,
  },
  reducers: {
    setCategories: (state, action) => {
        state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
