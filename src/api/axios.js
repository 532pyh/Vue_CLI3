import axios from 'axios';
import { getToken } from 'service/cookie';
import { Message } from 'element-ui';

const service = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        "X-Requested-With": "XMLHttpRequest",
    },
    baseURL: 'http://112.5.154.242:61900',
});
const serviceForm = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'multipart/form-data; charset=UTF-8',
        "X-Requested-With": "XMLHttpRequest",
    },
    baseURL: 'http://112.5.154.242:61900',
});
//http request 拦截器
let request = function (config) {
    const token = getToken();
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.token = token;
    }
    return config;
};
let request_err = function (err) {
    return Promise.reject(err);
};


// http response 拦截器
let response = function (res) {
    const data = res.data;
    const message = `${data.code}--${data.msg}` || '未知错误'
    if (res.status == 200) {
        if (data.code == 200) {
            return data;
        } else {
            Message({
                message: message,
                type: 'error',
            })
        }
    }
};

let response_err = function (err) {
    if (err.response) {
        const data = err.response.data;
        const message = `${data.code}--${data.msg}` || '未知错误'
        Message({
            message: message,
            type: 'error',
        })
    }
    return Promise.reject(err);
};

service.interceptors.request.use(request, request_err);
serviceForm.interceptors.request.use(request, request_err);

service.interceptors.response.use(response, response_err);
serviceForm.interceptors.response.use(response, response_err);

window.service = service;
window.serviceForm = serviceForm;

