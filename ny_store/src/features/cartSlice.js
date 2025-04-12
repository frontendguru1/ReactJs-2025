import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: [{}, {}],
  reducers: {
    addCart: () => {

    }
  }
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
