import { createSlice } from "@reduxjs/toolkit";
import { useCart } from "./cartSlice";
const { addToCart } = useCart();
const initialState = {
  stockProductsQuantity: 40,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state) => {
      if (state.stockProductsQuantity > 0) {
        state.stockProductsQuantity--;
      }
    });
  },
});
export default stockSlice.reducer;
