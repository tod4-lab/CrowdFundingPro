// 对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import store from "@/store";
import {MessageBox} from "element-ui";
import router from "@/router";

// 1 利用axios create创建一个axios实例
// 2 requests就是配置参数后的axios实例
const requests = axios.create({
    // 基础路径，请求发出的时候，路径前面就会出现api
    baseURL: '/api',
    // 设置请求超出事件
    timeout: 5000
})
// 请求拦截器，在请求发出之前能够检测到，做一些指定的业务
requests.interceptors.request.use((config)=>{
    // console.log(store.state.detail.uuid_token)
    nprogress.start();

    if(store.getters.token) {
        config.headers['token'] = store.getters.token
    }

    // 参数为config的回调函数
    // config为配置对象，包含一个中要的属性headers请求头
    return config;
});
requests.interceptors.response.use((res)=>{
    if(res.data.code === 4000 || res.data.code === 4001 || res.data.code === 4002) {
        MessageBox.confirm('登录失效请重新登录', 'Confirm logout', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            store.dispatch('member/resetToken').then(() => {
                location.reload()
            })
        })
    }
    else if(res.data.code !== 200) {
        Message({
            type: 'error',
            message: res.data.message,
            duration: 5 * 1000
        })
    }
    nprogress.done()
    // 响应成功的回调函数
    return res.data;
}, error=>{
    // 响应失败的回调函数
    nprogress.done()
    // 终止promise链
    return Promise.reject(error)
})

export default requests;