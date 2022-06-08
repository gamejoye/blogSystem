import axios from 'axios';
import React from 'react';
import cookie from 'react-cookies';

const instance = axios.create({
    timeout: 10000,
    baseURL: baseUrl 
})

instance.interceptors.request.use(config => {
    var token = cookie.load('token')
    if (token) {
        config.headers['token'] = token
    }
	
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})


instance.interceptors.response.use(response => {
    if (response.statusText == 'OK') {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data.msg)
    }
}, error => {
	// 请求报错的回调可以和后端协调返回什么状态码，在此根据对应状态码进行对应处理
    if (error.response) {
		// 如401我就让用户返回登录页
        if (error.response.status === 401) {
            this.props.history.push('/login');
        }
        return Promise.reject(error)
    } else {
        return Promise.reject('请求超时, 请刷新重试')
    }
})
class test1 extends React.Component {
    
}