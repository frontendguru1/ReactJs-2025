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
      console.log('payload', payload);
      console.log('state.cartItems', state.cartItems);
      const isItemExist = state.cartItems.some(item => item.id === payload.id);
      if (isItemExist) {
        const updatedCartItems = state.cartItems.map(item => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity + payload.quantity
            }
          }
          return item;
        });
        state.cartItems = updatedCartItems;
      }
      else {
        const updatedCartItems = [...state.cartItems, payload];
        state.cartItems = updatedCartItems
        console.log('updatedCartItems', updatedCartItems);
      }


      // state.cartItems.push(payload);

      let itemTotalCount = 0;
      state.cartItems.forEach(item => {
        itemTotalCount += item.quantity
      });

      state.cartItemCount = itemTotalCount;
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
