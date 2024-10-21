import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productdata: [
        {
            id: 1,
            image:"https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
             name:"MacBook",
             price:123 ,
             stock:123,
          },    
            
    ],
    searchedproducts: [
      {
        id: 1,
        image:"https://m.media-amazon.com/images/I/81Fm0tRFdHL.__AC_SY445_SX342_QL70_FMwebp_.jpg",
         name:"MacBook",
         price:123 ,
         stock:123,
      },
    ],
};


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;