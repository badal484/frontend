// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

// ⬅ IMPORTANT FIX
// Do NOT set default Content-Type globally
// Let axios automatically choose JSON or multipart

// Automatically attach access token
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    // If the request is FormData → do NOT force JSON header
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    // If normal JSON → let axios set automatically
    if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 and auto-refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");

      try {
        const res = await api.post("v1/token/refresh/", {
          refresh: refreshToken,
        });

        localStorage.setItem("accessToken", res.data.access);

        originalRequest.headers["Authorization"] =
          `Bearer ${res.data.access}`;

        return api(originalRequest); // retry request
      } catch (err) {
        console.log(err);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
