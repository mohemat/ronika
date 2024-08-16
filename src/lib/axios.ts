import Axios, {
  // AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { API_URL } from "@/config";
import storage from "@/utils/storage";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (!config.headers.noAuth && token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  const configs = config.headers;
  delete configs["noAuth"];
  config.headers = configs;

  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
