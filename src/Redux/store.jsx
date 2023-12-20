import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./Slice/home";
import allproductsReducer from "./Slice/allproducts";
import productDetailReducer from "./Slice/productdetails";
import addToCartReducer from "./Slice/addtocart";
import signInReducer from "./Slice/signin";
import getcartReducer from "./Slice/getcart";
export const store = configureStore({
  reducer: {
    home: homeReducer,
    allProducts: allproductsReducer,
    productDetail: productDetailReducer,
    addtocart: addToCartReducer,
    signInReducer: signInReducer,
    getcart: getcartReducer,
  },
});