// ProductSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "",
  brand: "",
  minPrice: 0,
  maxPrice: 0,
  
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.min;
      state.maxPrice = action.payload.max;
    },
    
  },
});

export const { setColor, setBrand, setPriceRange} = productSlice.actions;
export default productSlice.reducer;
