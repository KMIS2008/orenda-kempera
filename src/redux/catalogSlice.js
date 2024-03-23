import { createSlice } from '@reduxjs/toolkit';
import {fetchCamperCatalog} from './operations';

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
      isFavorite: [],
    },
    reducers: {
      addFavorite(state, action) {
        const newItem = action.payload;
        state.isFavorite.push(newItem);
      },
      removeFavorite(state, action) {
        state.isFavorite = state.isFavorite.filter((item) => item._id !== action.payload);
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCamperCatalog.pending, (state, _) => {
          state.isLoading = true;
        })
        .addCase(fetchCamperCatalog.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchCamperCatalog.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const catalogReducer = catalogSlice.reducer;
  export const { addFavorite, removeFavorite } = catalogSlice.actions;