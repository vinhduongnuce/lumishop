import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer';
import deviceReducer from './deviceReducer';
import cartReducer from './cartReducer';
import languageReducer from './languageReducer';

export default combineReducers({
  categories: categoryReducer,
  devices:  deviceReducer,
  carts: cartReducer,
  language: languageReducer
});