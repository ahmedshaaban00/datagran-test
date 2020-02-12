/* eslint-disable no-alert */
import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(request => {
  if (process.env.NODE_ENV === 'development')
    console.log('%c ---Starting Request', 'color: blue', request);

  return request;
});

instance.interceptors.response.use(
  response => {
    if (process.env.NODE_ENV === 'development')
      console.log('%c ---Ending Response', 'color: green', response);

    return response;
  },
  error => {
    if (process.env.NODE_ENV === 'development')
      console.log('%c ---Error Response', 'color: red', error.response);

    alert('error', 'An unknown error occurred! Please try again later.');

    return Promise.reject(error);
  }
);

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['Accept-Language'] = 'en';

export default instance;
