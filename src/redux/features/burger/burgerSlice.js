import { createSlice } from '@reduxjs/toolkit';
import {pizzaOrder} from "../pizza/pizzaSlice.js";

const initialState = {
    burgerBuns: 40_000,
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        burgerOrder: (state, action) => {
            state.burgerBuns = state.burgerBuns - action.payload.amount;
        },
        burgerCharge: (state, action) => {
            state.burgerBuns = state.burgerBuns + action.payload.amount;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(pizzaOrder, (state, action) => {
            console.log("Burger Slice: Pizza Order Received");
            // for each pizza order, we give out 2 burger buns to the customer as a gift.
            state.burgerBuns -= action.payload.amount * 2;
        });
    }
});

export const { burgerOrder, burgerCharge } = burgerSlice.actions;
export default burgerSlice.reducer;