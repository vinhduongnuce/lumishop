import axiosService from '../axoisService';
const _BASEURL = 'https://ed774cdaf509.ngrok.io';

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