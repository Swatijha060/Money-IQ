import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
    baseURL: BASE_URL, 
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
           
            if (error.response.status === 401) {
                if (window.location.pathname !== "/login") {
                  localStorage.removeItem("token"); 
                  window.location.href = "/login";  
                }
            }
              
        } else if (error.code === "ECONNABORTED") {
            console.log("Request timeout. Please try again.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
