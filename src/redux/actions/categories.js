import * as types from './types';

export const fetchCategories = () => {
  return {
    type: types.FETCH_CATEGORIES,
  };
};

export const fetchCategoriesSuccess = (data) => {
  return {
    type: types.FETCH_CATEGORIES_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: types.FETCH_CATEGORIES_FAILED,
    payload: {
      error,
    },
  };
};