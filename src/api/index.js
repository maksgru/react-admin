import axios from 'axios';
import config from '../config';
import { storage } from '../utils';

const axiosInstance = axios.create({
  baseURL: config.serverUrl,
  headers: {}
});

axiosInstance.interceptors.request.use(request => {
  const accessToken = storage.getAccessToken();
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
});

axiosInstance.interceptors.response.use(
  ({ data }) => data,
  async error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
