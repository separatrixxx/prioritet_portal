import { createSlice } from '@reduxjs/toolkit'
import { FiltersInterface } from '../../interfaces/filters.interface';


const filtersData: FiltersInterface = {
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
    switchSort: (state, action) => {
        state.filters.sort = action.payload;
    },
    switchIsAvailable: (state) => {
        state.filters.is_available = (state.filters.is_available === 'False' ? 'True' : 'False');
    },
  },
});

export const { switchSort, switchIsAvailable } = filtersSlice.actions;

export default filtersSlice.reducer;
