import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllProductByCategory, getAllProducts } from "../services/productService";


// Get All Products
export const getAllProduct = createAsyncThunk('product/list', async (_, { rejectWithValue }) => {
  try {
    const response = await getAllProducts();
    return response.data;
  } catch (error) {
    console.log('error', error);
    return rejectWithValue('Failed to fetch the product list');
  }
});


// Get all products by category
export const getAllProductsByCategory = createAsyncThunk('category/products', async (id, { rejectWithValue }) => {
  try {
    const response = await getAllProductByCategory(id);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return rejectWithValue('Failed to fetch the product list');
  }
});


// Initial state
const initialState = {
  product: [],
  categories: [
    { name: 'Shoes', id: 1 },
    { name: 'Electronic', id: 2 },
    { name: 'Clothes', id: 3 },
  ],
  loading: false,
  error: null,
}

// slice
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


      .addCase(getAllProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.product = action.payload;
      })

      .addCase(getAllProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
  }
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;
