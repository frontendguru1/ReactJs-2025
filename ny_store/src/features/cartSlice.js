import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartItemCount: 0,
  loading: false,
  error: null,
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,

  reducers: {
    addToCart: (state, data) => {
      const { payload } = data;
      state.cartItems.push(payload);
      state.cartItemCount = state.cartItems.length;
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
