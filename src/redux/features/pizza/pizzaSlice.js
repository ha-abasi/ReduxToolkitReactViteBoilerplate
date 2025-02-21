import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pizzaBase: 90_000,
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        pizzaOrder: (state, action) => {
            state.pizzaBase = state.pizzaBase - action.payload.amount;
        },
        pizzaCharge: (state, action) => {
            state.pizzaBase = state.pizzaBase + action.payload.amount;
        }
    }
});

export const { pizzaOrder, pizzaCharge } = pizzaSlice.actions;
export default pizzaSlice.reducer;