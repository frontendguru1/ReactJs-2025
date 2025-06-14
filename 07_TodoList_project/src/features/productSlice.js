import { createSlice } from "@reduxjs/toolkit"

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
    }
  }
});

export const { clearError } = productSlice.actions;

export default productSlice.reducer;