import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {BASE_URL} from './urls';

const axiosClient: AxiosInstance = axios.create({
  headers: {
    baseURL: BASE_URL,
    'Content-Type': 'application/json', // Gönderilen verinin türü JSON
    Accept: 'application/json', // Kabul edilen yanıt türü JSON
    // 'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Eğer bir token ile yetkilendirme kullanıyorsanız
  },
  withCredentials: true,
});

axiosClient.defaults.baseURL = BASE_URL;

axiosClient.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    config.params = {
      ...config.params,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export {axiosClient};
