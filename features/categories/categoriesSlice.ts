import { createSlice } from '@reduxjs/toolkit'
import { CategoryItem } from '../../interfaces/categories.interface';


const categoriesData: CategoryItem[] = [];

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
