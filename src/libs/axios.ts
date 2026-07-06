import axios from 'axios';
import { loginWithTelegram } from '../misc/AuthService.ts';

const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});
baseUrl.interceptors.request.use(
  function (config) {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      config.headers['Authorization'] = `Bearer ${jwt}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
baseUrl.interceptors.response.use(
  (response) => {
    const jwt = response.data?.token;
    if (jwt) {
      localStorage.setItem('jwt', jwt);
    }
    return response;
  },

  async (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !error.config._retry
    ) {
      error.config._retry = true;

      try {
        await loginWithTelegram();

        return baseUrl(error.config);
      } catch (authError) {
        return Promise.reject(authError);
      }
    }

    return Promise.reject(error);
  },
);
export default baseUrl;
