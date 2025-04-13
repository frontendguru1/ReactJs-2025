import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { productService } from "../services/productService";


export const getAllProduct = createAsyncThunk('product/list', async (_, { rejectWithValue }) => {
  try {
    const response = await productService();
    return response.data;
  } catch (error) {
    console.log('error', error);
    return rejectWithValue('Failed to fetch the product list');
  }
});

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
      console.log("clear error action trigered");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.product = action.payload;
      })

      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

  }
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;
