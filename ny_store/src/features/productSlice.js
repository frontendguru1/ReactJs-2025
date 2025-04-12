import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const productAsyncThunk = createAsyncThunk('productThunk', () => {

})

const initialState = {
  product: [],
  loading: false,
  error: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productAsyncThunk.pending, (state) => {
        state.loading = true;
        state.error = null;

      })

      .addCase(productAsyncThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.product = action.payload;
      })

      .addCase(productAsyncThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

  }
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;
