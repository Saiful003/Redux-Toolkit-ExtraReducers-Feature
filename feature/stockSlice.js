import { createSlice } from "@reduxjs/toolkit";
import { useCart } from "./cartSlice";
const { addToCart } = useCart();
const initialState = {
  stockProductsQuantity: 40,
  isDanger: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  // other reducers action
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state) => {
      if (state.stockProductsQuantity > 0) {
        state.stockProductsQuantity--;
        state.isDanger = !state.isDanger;
      }
    });
  },
});
export default stockSlice.reducer;
