import axios from "axios";

//get请求axios实例
const getInstance = axios.create({
    timeout: 5000,
    baseURL: 'http://localhost:3000',
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
    baseURL: 'http://localhost:3000',
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