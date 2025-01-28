import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id:1, name:"Bread" , price:5 },
        { id:2, name:"Milk" , price:6 },
      ],
};

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push({id: Date.now(),name: action.payload.name, price: action.payload.price })
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(p => p.id !== action.payload)
        }
    }
});

export const { addProduct, deleteProduct} = ProductSlice.actions;

export default ProductSlice.reducer;