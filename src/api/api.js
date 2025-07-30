<<<<<<< HEAD
import axios from "axios";
import config from "@/config";

const api = axios.create({
  baseURL: config.apiUrl,
});

// Add token dynamically before every request
api.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

export default api;
=======
import axios from "axios";
import config from "@/config";

const api = axios.create({
  baseURL: config.apiUrl,
});

// Add token dynamically before every request
api.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("authToken");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  }
  return req;
});

export default api;
>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
