import { createSlice } from '@reduxjs/toolkit'
import { DisplayInterface } from '../../interfaces/filters.interface';


const displayData: DisplayInterface = {
  display: 'grid',
}

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    display: displayData,
  },
  reducers: {
    setDisplay: (state, action) => {
      state.display.display = action.payload;
    },
  },
});

export const { setDisplay } = displaySlice.actions;

export default displaySlice.reducer;
