import axiosService from '../axoisService';
const _BASEURL = 'https://6dad382dd123.ngrok.io';

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