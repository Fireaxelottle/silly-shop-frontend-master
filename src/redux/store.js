import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/productSlice";
import CartReducer from "./Slices/cartSlice";
import Cart from "../pages/Cart";

export default configureStore({
    reducer: {
        product: ProductReducer,
        cart: CartReducer,
    }
    ,
})