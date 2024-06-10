import { createSlice } from '@reduxjs/toolkit';
import { fetchSales } from './thunk';

export const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    pending: false,
    data: [],
    total: 0,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSales.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload.data;
        state.total = action.payload.total;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export default salesSlice.reducer;
