import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllCategoriesData, getAllProductByCategory, getAllProducts, getProductDataById } from "../services/productService";


// Get All Products
export const getAllProduct = createAsyncThunk('product/list', async (params = {}, { rejectWithValue }) => {
  try {
    console.log('params from slice', params);

    const response = await getAllProducts(params); // service
    return response.data;
  } catch (error) {
    console.log('error', error);
    return rejectWithValue('Failed to fetch the product list');
  }
});

// Get Product by ID
export const getProductById = createAsyncThunk('product/byId', async (id, { rejectWithValue }) => {
  try {
    const response = await getProductDataById(id); // service
    return response.data;
  } catch (error) {
    console.log('error', error);
    return rejectWithValue('Failed to fetch the product by ID');
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

// Get all categories
export const getAllCategories = createAsyncThunk('categories', async (_, { rejectWithValue }) => {
  try {

    const response = await getAllCategoriesData(); // service
    return response.data;
  } catch (error) {
    console.log('error', error);
    return rejectWithValue('Failed to fetch the categories');
  }
});


// Initial state
const initialState = {
  product: [],
  productDetailData: {},
  productListByCategory: [],
  categories: [],
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

      //getAllProduct
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

      // getProductById
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.productDetailData = action.payload;
      })

      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })


      //getAllProductsByCategory
      .addCase(getAllProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.productListByCategory = action.payload;
      })

      .addCase(getAllProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.categories = action.payload;
      })

      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
  }
});

export const { clearError } = productSlice.actions;
export default productSlice.reducer;
