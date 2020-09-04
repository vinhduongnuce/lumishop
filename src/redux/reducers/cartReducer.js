import { ADD_CART, UPDATE_CART, DELETE_CART, DESTROY_CART } from '../actions/types';

const INITIAL_STATE = [];

const carts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CART: {
    const index = state.findIndex(item=>item.id === action.payload.id);
    index === -1 ? null : state[index].qty = state[index].qty + action.payload.qty;
    return index === -1 ? [...state, action.payload ] : state;
  }
  case UPDATE_CART:
    return state;
  case DESTROY_CART:
    return INITIAL_STATE;
  case DELETE_CART:
    return state.filter(item=> item.id !== action.payload);
  default:
    return state;
  }
};
  
export default carts;