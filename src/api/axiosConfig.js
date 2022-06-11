import axios from "axios";

const instance = axios.create({
    timeout: 10000,
    baseURL: 'http://localhost:3000',
    withCredentials: true
})

instance.interceptors.response.use(function (config) {
    return config;
}, function (error) {
    alert('发生异常错误...')
    return Promise.reject(error);
});

export{
    instance
};