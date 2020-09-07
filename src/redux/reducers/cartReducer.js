/* eslint-disable no-case-declarations */
import { GET_CART, ADD_CART, UPDATE_CART, DELETE_CART, DESTROY_CART } from '../actions/types';

const INITIAL_STATE = [];

const carts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CART: 
    return state;
  case ADD_CART:
    const found = state.find(element => element.id === action.payload.id);
    if (found) {
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.qty = item.qty + action.payload.qty;
        }
        return item;
      });
    }
    return [...state, action.payload];
  case UPDATE_CART:
    if (action.payload.qty === 0) {
      return state.filter(item => item.id !== action.payload.id);
    }
    return state.map(item => {
      if (item.id === action.payload.id) {
        item.qty = action.payload.qty;
      }
      return item;
    });
  case DESTROY_CART:
    return INITIAL_STATE;
  case DELETE_CART:
    return state.filter(item=> item.id !== action.payload);
  default:
    return state;
  }
};
  
export default carts;