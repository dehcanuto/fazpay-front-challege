import axios from "axios";

const api = axios.create({
  baseURL: process.env.APP_API_URL,
});

export default api;