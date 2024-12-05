import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        console.log("existingItem", existingItem, existingItem.quantity);
        existingItem.quantity++;
      } else {
        console.log("not existingItem", existingItem);
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.name !== name);
        } else {
          existingItem.quantity--;
        }
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      console.log("name", name);
      console.log("quantity", quantity);
      const existingItem = state.items.find (item => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    }
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
