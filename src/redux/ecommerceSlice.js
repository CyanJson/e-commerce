import { createSlice } from "@reduxjs/toolkit";

const ecommerceSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const newAddToCart = {
                id: Date.now(),
                product: action.payload,
            };
            state.push(newAddToCart);
        },
        removeToCart: (state, action) => {
            const index = state.findIndex((product) => product.id === action.payload);
            if(index !== -1) state.splice(index, 1);
        }
    }
});

export const { addToCart, removeToCart } = ecommerceSlice.actions;
export default ecommerceSlice.reducer;