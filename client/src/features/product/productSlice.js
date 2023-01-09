import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  total: "",
};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProductList(state, action) {
      state.productList = action.payload;
    },
    setProductTotal(state, action) {
      state.total = action.payload;
    },
  },
});

export const { setProductList, setProductTotal } = productListSlice.actions;
export default productListSlice.reducer;
