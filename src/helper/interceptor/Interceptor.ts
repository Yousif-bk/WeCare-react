import axios, { AxiosError, AxiosResponse } from "axios";
const token = localStorage.getItem("token");



const interceptor = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    }
});


// Add a request interceptor
interceptor.interceptors.request.use(
    (config) => {
        const Jwt = localStorage.getItem("app:jwt");


        if (token) {
            config.headers.Authorization = `Bearer ${Jwt}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

interceptor.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default interceptor;
