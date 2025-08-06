import axios from "axios";
import { toast } from "react-toastify";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // important for cookies
});

// Add response interceptor
apiRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Detect token expiration error
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshRes = await apiRequest.get("/auth/refresh");

        if (refreshRes.status === 200) {
          // Retry original request after refreshing token
          return apiRequest(originalRequest);
        }
      } catch (refreshError) {
        toast.error("Session expired. Please login again.");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiRequest;