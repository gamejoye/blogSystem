import axios from "axios";

//get请求axios实例
const getInstance = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

getInstance.interceptors.response.use(function (config) {
    return config;
}, function (error) {
    alert('发生异常错误...')
    return Promise.reject(error);
});

export{
    getInstance
};

//post请求axios实例
const postInstance = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

postInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    alert('发生异常错误...')
    return Promise.reject(error);
});

export{
    postInstance
};