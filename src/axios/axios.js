import axios from "axios";

const axiosApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_BASE_URL}`,
});

export default axiosApi;