import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from './ecommerceSlice';

const store = configureStore({
    reducer: {
        products: ecommerceReducer
    }
});

export default store;