import axiosService from '../axoisService';
const _BASEURL = 'https://40d26f1a04dd.ngrok.io';

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