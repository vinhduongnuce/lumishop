import * as types from '../actions/types';

const INITIAL_STATE = {
  language: 'en'
};

var languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case types.CHANGE_LANGUAGE: {
    return { language: action.payload };
  }
  default:
    return state;
  }
};

export default languageReducer;