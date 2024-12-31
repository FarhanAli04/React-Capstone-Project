import { createSlice } from '@reduxjs/toolkit';
import products from '../data/productsData';

const initialState = {
  products: products,
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = state.products.find(product => product.id === action.payload) || null;
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectSelectedProduct = (state) => state.product.selectedProduct;

export default productSlice.reducer;