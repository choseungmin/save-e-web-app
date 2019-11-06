import axios from 'axios';

axios.interceptors.request.use(function (config) {

  // csrf
  const metas = document.getElementsByTagName('meta');
  let _csrf;
  let _csrf_header;
  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === '_csrf') {
      _csrf = metas[i].getAttribute('content');
    }
    if (metas[i].getAttribute('name') === '_csrf_header') {
      _csrf_header = metas[i].getAttribute('content');
    }
  }

  config.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    [_csrf_header]: _csrf
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
