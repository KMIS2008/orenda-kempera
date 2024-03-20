import { createSlice } from '@reduxjs/toolkit';
// import fetchCamperCatalog from './operations';

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder.addCase()
    }
})

export const catalogReducer = catalogSlice.reducer;