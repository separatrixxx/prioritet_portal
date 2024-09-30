import { createSlice } from '@reduxjs/toolkit'
import { ProductItem } from '../../interfaces/product.interface';


const productsData: ProductItem[] = [];

export const userSlice = createSlice({
  name: 'products',
  initialState: {
    products: productsData,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductsDefault: (state) => {
      state.products = [];
    },
  },
});

export const { setProducts, setProductsDefault } = userSlice.actions;

export default userSlice.reducer;
