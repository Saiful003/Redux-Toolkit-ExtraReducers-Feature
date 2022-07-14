import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProductsQuantity: 60,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      if (state.allProductsQuantity > 0) {
        state.allProductsQuantity--;
      }
    },
  },
});
export default cartSlice.reducer;
const { addToCart } = cartSlice.actions;

// custom hook
export const useCart = () => {
  return {
    addToCart,
  };
};
