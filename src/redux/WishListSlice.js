import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
};

export const WishListSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (!item) {
        state.products.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
    addToWishlist,
  deleteItem,
  resetCart,
} = WishListSlice.actions;
export default WishListSlice.reducer;
