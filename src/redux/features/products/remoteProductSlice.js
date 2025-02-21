import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    products: [],
    error: null
}

// simulate delay in fetching data from remote API
function delay(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

// fetch data from remote API :
// createAsyncThunk : create a thunk action creator that returns a promise
// it have three states : pending, fulfilled, rejected.
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    await delay(2000); // simulate delay
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
});

const remoteProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error in loading products!";
        });
    }
})


export default remoteProductSlice.reducer;