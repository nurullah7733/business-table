import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import settingsSlice from "../features/settings/settingsSlice";
export default configureStore({
  reducer: {
    loader: settingsSlice,
    productList: productSlice,
  },
});
