import { createSlice } from '@reduxjs/toolkit'
import { ClassInterface } from '../../interfaces/classes.interface';


const classesData: ClassInterface[] = [];

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
