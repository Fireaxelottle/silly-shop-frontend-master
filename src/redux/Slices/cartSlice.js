import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartItems: [
        {
          productId: "1",
          name: "Puma Shoes",
          price: 4000,
          quantity: 2,
          image: "https://m.media-amazon.com/images/I/71D8bDU-IVL._AC_SY695_.jpg",
        },
      ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
  },
});
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;