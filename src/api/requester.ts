import axios from 'axios';

export const apiRequester = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

apiRequester.interceptors.response.use(response => {
  return response.data;
});
