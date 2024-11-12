import { createSlice } from '@reduxjs/toolkit'
import { ProductsInterface } from '../../interfaces/product.interface';


const productsData: ProductsInterface = {
  results: [],
  total_count: -1,
  limit: 0,
  offset: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: productsData,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsDefault: (state) => {
      state.products = productsData;
    },
  },
});

export const { setProducts, setProductsDefault } = productsSlice.actions;

export default productsSlice.reducer;
