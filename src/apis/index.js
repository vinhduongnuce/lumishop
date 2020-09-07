import axiosService from '../axoisService';
const _BASEURL = 'https://75e3d7309707.ngrok.io';

export const apifetchDevice = () => {
  return axiosService.get(`${_BASEURL}/devices`);
};

export const apifetchDeviceDetail = (id) => {
  return axiosService.get(`${_BASEURL}/devices?id=${id}`);
};

export const apifetchDeviceByCategory = (id) => {
  return axiosService.get(`${_BASEURL}/devices/bycategory/${id}`);
};

export const apifetchCategory = () => {
  return axiosService.get(`${_BASEURL}/categories`);
};

export const apifetchDeviceSearch = (name) => {
  return axiosService.get(`${_BASEURL}/devices/search?name=${name}`);
};