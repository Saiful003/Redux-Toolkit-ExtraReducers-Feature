import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../feature/cartSlice";
import stockSlice from "../feature/stockSlice";
const store = configureStore({
  reducer: {
    myCart: cartSlice,
    myStock: stockSlice,
  },
});

export default store;
