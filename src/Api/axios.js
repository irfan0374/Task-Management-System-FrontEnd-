import axios from "axios";
import { toast } from "react-toastify";

const createAxiosInstance = (baseURL) => {
    const instance = axios.create({
        baseURL,
        timeout: 20000,
        timeoutErrorMessage: "Request timeout... Please try again!"
    });
    return instance;
};

const attachToken = (config) => {
    const authToken = localStorage.getItem('token');

    if (authToken) {
        config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
};

export const AxiosInstance = createAxiosInstance('http://localhost:3000');
AxiosInstance.interceptors.request.use(attachToken);

AxiosInstance.interceptors.response.use(
    response => response,
    error => handleAxiosError(error)
);

const handleAxiosError = (error) => {
    const errorMessage = error.response ? error.response.data.message : "An error occurred while processing the request.";
    if (error.response) {
        if (error.response.status === 404) {
            toast.error("404 - Resource Not Found");
        } else if (error.response.status === 500) {
            toast.error("500 - Internal Server Error");
        } else {
            toast.error(errorMessage);
        }
    } else {
        toast.error(errorMessage);
    }
};
