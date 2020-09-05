import * as types from './types';

export const addCart = (id, name, qty, price, image) => ({
  type: types.ADD_CART,
  payload: {id, name, qty, price, image}
});

export const getCart = () => ({
  type: types.GET_CART
});

export const updateCart = (id, qty) => ({
  type: types.UPDATE_CART,
  payload: {id,qty}
});

export const deleteCart = (id) => ({
  type: types.DELETE_CART,
  payload: id
});

export const destroyCart = () => ({
  type: types.DESTROY_CART
});


export const searchChange = name => ({
  type: types.SEARCH_CHANGE,
  payload: name
});

export const searchDevice = name => ({
  type: types.SEARCH_DEVICE,
  payload: name
});




