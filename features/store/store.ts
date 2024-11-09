import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import classesSlice from '../classes/classesSlice';
import categoriesSlice from '../categories/categoriesSlice';
import productsSlice from '../products/productsSlice';
import filtersSlice from '../filters/filtersSlice';
import displaySlice from '../display/displaySlice';
import favoritesSlice from '../favorites/favoritesSlice';


const makeStore = () =>
  configureStore({
    reducer: {
      classes: classesSlice,
      categories: categoriesSlice,
      products: productsSlice,
      filters: filtersSlice,
      display: displaySlice,
      favorites: favoritesSlice,
    },
    devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);