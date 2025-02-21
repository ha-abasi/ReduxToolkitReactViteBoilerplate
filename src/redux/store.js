import {configureStore} from "@reduxjs/toolkit";
import pizzaReducer from "./features/pizza/pizzaSlice"
import burgerReducer from "./features/burger/burgerSlice"

export default configureStore({
    reducer: {
        pizza: pizzaReducer,
        burger: burgerReducer
    }
});