import axios from 'axios';

const baseUrl = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',
  }

})
export default baseUrl;