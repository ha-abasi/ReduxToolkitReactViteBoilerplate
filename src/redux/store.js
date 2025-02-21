import {configureStore} from "@reduxjs/toolkit";
import pizzaReducer from "./features/pizza/pizzaSlice"
import burgerReducer from "./features/burger/burgerSlice"
import remoteProductSlice from "./features/products/remoteProductSlice.js";

export default configureStore({
    reducer: {
        pizza: pizzaReducer,
        burger: burgerReducer,
        remote_products: remoteProductSlice,
    }
});