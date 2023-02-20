//对axios进行二次封装
import axios from "axios";

//创建一个axios实例 requests=axios.create({})
const requests = axios.create({
    //基础路径，发请求的时候，路径当中会出现api
    baseURL: '/api',
    //请求时间超过5秒
    timeout: 5000
});

//请求拦截器
//在请求发出去之前做一些操作
requests.interceptors.request.use((config) => {
    // 路由跳转
    // redirect('/')

    //主要查看config配置对象中headers请求头
    return config;
});

//响应拦截器
//包含两个函数 成功返回的函数 失败的返回的函数
requests.interceptors.response.use((res) => {
    //返回服务器响应数据 响应拦截器可以检测到并做一些操作
    return res.date;
}, (erroe) => {
    //失败
    return promise.reject(new Error('faile'))
});
//像外暴露 axios 二次封装的实例
export default requests;
