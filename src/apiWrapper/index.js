import axios from 'axios';
import store from '../store';
import {getSecureData} from "../storage";

// Set content type as JSON for all post requests.
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const axiosInstance = axios.create({
  baseURL: 'https://api-stage.thesettlementtable.in',
  timeout: 10000
});

// Add a request interceptor
const requestInterceptor = {
  onSuccess: async (config) => {
    try {
      console.log('Setting access token in axios for loggein users');
      const isLoggedIn = store.getState().AppReducer.isLoggedIn ;
      const accessToken = getSecureData('token');

      if (isLoggedIn) {
        config.headers.Authorization = `JWT ${accessToken}`;
      }

    } catch (error) {
      console.log('error in axios.interceptors.request', error);
    }

    console.log("req", config);

    return config;
  },
  onError:(error) => {
    Promise.reject(error);
  }
};

axiosInstance.interceptors.request.use(requestInterceptor.onSuccess, requestInterceptor.onError);

// Add a response interceptor
const responseInterceptor = {
  onSuccess:(response) => {
      console.log("response", response);

    if (typeof (response.data.success) !== 'undefined' && response.data.success === false) {
      return Promise.reject(new Error(response.data.message));
    }

    return response;
  },
  onError:async (error) => {
    if (typeof (error.response) === 'undefined' || error.message === "Network Error") {
      return Promise.reject(new Error("noIntenetMsg"));
    }
    const originalRequest = error.config;
    console.log('Api Failed: ',
      { request: originalRequest,
        response: error.response
      });

    if (error.response.status >=500 && error.response.status <=599) {
      console.log("Error in ApiWrapper serverError", error);

      return Promise.reject(new Error("serverError"));
    }

    console.log("Error in ApiWrapper", error);

    return Promise.reject(new Error(error.message));
  }
};

axiosInstance.interceptors.response.use(responseInterceptor.onSuccess, responseInterceptor.onError);
