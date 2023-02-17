// import request from '@/utils/request'
import axios from 'axios'
 
export const request= axios.create({
    baseURL: ' '
})
 
export default ({ store }) => {
    // 请求拦截器
    request.interceptors.request.use(function (config) {

        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    // 响应拦截器
    request.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
}