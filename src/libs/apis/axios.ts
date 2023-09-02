import axios from 'axios';
import NProgress from 'nprogress';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

const Settings = (NProgress.settings = {
  minimum: 0.08,
  easing: 'linear',
  positionUsing: '',
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  showSpinner: true,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: 'body',
  template:
    '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
});

let requestCount = 0;

client.interceptors.request.use((config) => {
  if (requestCount === 0) {
    NProgress.start();
    NProgress.configure({ showSpinner: false });
    NProgress.configure({ minimum: 0.9 });
    NProgress.configure({ speed: 400 });
  }
  requestCount++;
  return config;
});

client.interceptors.response.use(
  (response) => {
    requestCount--;
    if (requestCount === 0) {
      NProgress.done();
    }
    return response;
  },
  (error) => {
    requestCount--;
    if (requestCount === 0) {
      NProgress.done();
    }
    return Promise.reject(error);
  },
);
