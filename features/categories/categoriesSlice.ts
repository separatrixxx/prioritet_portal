import { createSlice } from '@reduxjs/toolkit'
import { CategoryInterface } from '../../interfaces/categories.interface';


const categoriesData: CategoryInterface[] = [];

export const userSlice = createSlice({
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

export const { setCategories } = userSlice.actions;

export default userSlice.reducer;
