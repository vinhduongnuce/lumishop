import * as types from './types';

export const fetchHomeDevices = () => {
  return {
    type: types.FETCH_DEVICES_HOME,
  };
};
export const fetchHomeDevicesSuccess = (data) => {
  return {
    type: types.FETCH_DEVICES_HOME_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchHomeDevicesFailed = (error) => {
  return {
    type: types.FETCH_DEVICES_HOME_FAILED,
    payload: {
      error,
    },
  };
};

export const fetchListDevices = () => {
  return {
    type: types.FETCH_DEVICES_LIST,
  };
};
export const fetchListDevicesSuccess = (data) => {
  return {
    type: types.FETCH_DEVICES_LIST_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListDevicesFailed = (error) => {
  return {
    type: types.FETCH_DEVICES_LIST_FAILED,
    payload: {
      error,
    },
  };
};

export const fetchDetailDevices = (id) => {
  return {
    type: types.FETCH_DEVICES_DETAIL,
    payload: id
  };
};
export const fetchDetailDevicesSuccess = (data) => {
  return {
    type: types.FETCH_DEVICES_DETAIL_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchDetailDevicesFailed = (error) => {
  return {
    type: types.FETCH_DEVICES_DETAIL_FAILED,
    payload: {
      error,
    },
  };
};

export const fetchDevicesByCategory = (id) => {
  return {
    type: types.FETCH_DEVICES_BY_CATEGORY,
    payload: id
  };
};
export const fetchDevicesByCategorySuccess = (data) => {
  return {
    type: types.FETCH_DEVICES_BY_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchDevicesByCategoryFailed = (error) => {
  return {
    type: types.FETCH_DEVICES_BY_CATEGORY_FAILED,
    payload: {
      error,
    },
  };
};