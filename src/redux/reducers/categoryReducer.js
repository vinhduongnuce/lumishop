import * as types from '../actions/types';
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case types.FETCH_CATEGORIES: 
    return state;
  case types.FETCH_CATEGORIES_SUCCESS:
    return action.payload.data;
  case types.FETCH_CATEGORIES_FAILED:
    return [];
  default:
    return state;
  }
};
  