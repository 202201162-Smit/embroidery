import axios from 'axios';

const API = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: 'https://embroidery-1.onrender.com/api',
});

export default API;
