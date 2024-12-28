import { createSlice } from '@reduxjs/toolkit'
import { FiltersInterface } from '../../interfaces/filters.interface';


const filtersData: FiltersInterface = {
  start: {
    class: 'product',
    categoryId: 0,
    limit: 30,
    offset: 0,
  },
  sort: 'by_name=asc',
  is_available: 'False',
  name: '',
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: filtersData,
  },
  reducers: {
    setClass: (state, action) => {
      state.filters.start.class = action.payload;
    },
    setCategoryId: (state, action) => {
      state.filters.start.categoryId = action.payload;
    },
    setLimit: (state, action) => {
      state.filters.start.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.filters.start.offset = action.payload;
    },
    switchSort: (state, action) => {
      state.filters.sort = action.payload;
    },
    switchIsAvailable: (state) => {
      state.filters.is_available = (state.filters.is_available === 'False' ? 'True' : 'False');
    },
    setFiltersName: (state, action) => {
      state.filters.name = action.payload;
    },
    setFiltersDefault: (state) => {
      state.filters = filtersData;
    },
  },
});

export const { setClass, setLimit, setOffset, setCategoryId, switchSort,
  switchIsAvailable, setFiltersName, setFiltersDefault } = filtersSlice.actions;

export default filtersSlice.reducer;
