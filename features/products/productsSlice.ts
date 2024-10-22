import { createSlice } from '@reduxjs/toolkit'
import { ProductItem, ProductsState } from '../../interfaces/product.interface';


const productsData: ProductsState = {
  results: [],
  total_count: -1,
  limit: 0,
  offset: 0,
  activeType: 'product',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: productsData,
  },
  reducers: {
    setProducts: (state, action) => {
      const existingProductIds = state.products.results.map(p => p.id);
      const newProducts = action.payload.results.filter((p: ProductItem) => !existingProductIds.includes(p.id));
      
      state.products.results = [...state.products.results, ...newProducts];
      state.products.total_count = action.payload.total_count;
      state.products.limit = action.payload.limit;
      state.products.offset = action.payload.offset;
    },
    setProductsDefault: (state) => {
      state.products = productsData;
    },
    setActiveType: (state, action) => {
      state.products.activeType = action.payload;
    },
  },
});

export const { setProducts, setProductsDefault, setActiveType } = productsSlice.actions;

export default productsSlice.reducer;
