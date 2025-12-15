import axios from 'axios';

const API = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: 'https://embroidery-gamma.vercel.app',
});

export default API;
