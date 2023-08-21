import { createSlice } from "@reduxjs/toolkit";
import carts from './carts.json'

const currentUser = {
    "userName": "zlm",
    "image": "cat.png",
};
   
const templateCart = {
    ...currentUser,
    "name": "Halo",
    "description": "cat food",
    "price": "$22.99",
    "rate": "5",
    "comment": "200",
    "addCart": true
}
   

const cartsSlice = createSlice({
 name: 'carts',
 initialState: { carts: carts },
 reducers: {
    deleteItem(state, action) {
      const index = state.carts
        .findIndex(cart =>cart._id === action.payload);
      state.carts.splice(index, 1);
    },

    addItem(state, action) {
      state.carts.unshift({
        ...action.payload,
        ...templateCart,
        _id: (new Date()).getTime(),
      })
    }
  }
 
});

export const {addItem, deleteItem} = cartsSlice.actions;
export default cartsSlice.reducer;