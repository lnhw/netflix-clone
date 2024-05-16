import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_URL!,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});
export default api;
