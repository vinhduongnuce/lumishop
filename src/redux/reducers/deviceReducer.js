import * as types from '../actions/types';

const INITIAL_STATE = {
  list:[],
  home: [],
  search: '',
  resultsSearch: [],
  resultDetail: null
};

const deviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // set state home
  case types.FETCH_DEVICES_HOME: 
    return state;
  case types.FETCH_DEVICES_HOME_SUCCESS:
    return {...state, home: action.payload.data.slice(1, 3)};
  case types.FETCH_DEVICES_HOME_FAILED:
    return {...state, home: []};
  // set state list
  case types.FETCH_DEVICES_LIST:
    return state;
  case types.FETCH_DEVICES_LIST_SUCCESS: 
    return {...state, list: action.payload.data};
  case types.FETCH_DEVICES_LIST_FAILED:
    return {...state, list: []};
  // set state resultDetail
  case types.FETCH_DEVICES_DETAIL: 
    return state;
  case types.FETCH_DEVICES_DETAIL_SUCCESS:
    console.log(action.payload.data);
    return {...state, resultDetail: action.payload.data};
  case types.FETCH_DEVICES_DETAIL_FAILED:
    return {...state, resultDetail: null};
  // set state resultsSearch
  case types.FETCH_DEVICES_BY_CATEGORY: 
    return state;
  case types.FETCH_DEVICES_BY_CATEGORY_SUCCESS:
    return {...state, resultsSearch: action.payload.data};
  case types.FETCH_DEVICES_BY_CATEGORY_FAILED:
    return {...state, resultsSearch: []};

  
  case types.SEARCH_CHANGE:
    return {...state, search: action.payload.trim()};
  case types.SEARCH_DEVICE:
    return state.list.filter(devices => devices.name.includes(state.search));
  default:
    return state;
  }
};
  
export default deviceReducer;