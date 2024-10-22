import { createSlice } from '@reduxjs/toolkit'
import { ClassItem } from '../../interfaces/classes.interface';


const classesData: ClassItem[] = [];

export const classesSlice = createSlice({
  name: 'classes',
  initialState: {
    classes: classesData,
  },
  reducers: {
    setClasses: (state, action) => {
        state.classes = action.payload;
    },
  },
});

export const { setClasses } = classesSlice.actions;

export default classesSlice.reducer;
