import axios from 'axios'
import { BASEURL } from './constval'
const service = axios.create({
  baseURL: BASEURL, // api 的 base_url
  method: 'get', // default
  withCredentials: true,
  timeout: 15000 // 请求超时时间
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做一些事情
    return config
  },
  error => {
    // 做一些有请求错误的事情
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    // 使用响应数据返回响应；
    return response
  },
  error => {
    // 使用响应错误返回
    return Promise.reject(error.response.data)
  }
)

export default service
