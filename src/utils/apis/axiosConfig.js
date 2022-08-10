import axios from "axios";
import { BASE_URL } from "../../constant";

//get请求axios实例
const getInstance = axios.create({
    timeout: 5000,
    baseURL: BASE_URL,
    withCredentials: true,
})

getInstance.interceptors.response.use(function (config) {
    return config;
}, function (error) {
    alert(error)
    return Promise.reject(error);
});

export {
    getInstance
};

//post请求axios实例
const postInstance = axios.create({
    timeout: 5000,
    baseURL: BASE_URL,
    withCredentials: true
})

postInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    alert(error)
    return Promise.reject(error);
});

export {
    postInstance
};