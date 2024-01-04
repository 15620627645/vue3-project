// 二次封装axios，就是在请求，响应拦截器请求前后做统一处理
import axios from 'axios'
import { ElMessage } from 'element-plus'
import userStore from '@/store/moduls//user.ts'

// 创建axios实例（）其他配置
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //跟路径，每次的请求路径前面都带跟路径
  timeout: 5000, //请求超时
})

// 请求拦截器——如设置统一的token(header请求头)、密钥
request.interceptors.request.use((config) => {
  // 获取仓库中的token
  const user = userStore()
  config.headers['token'] = user.TOKEN
  // 必须返回config否则发不出请求
  return config
})

// 响应拦截器——统一的错误处理、缓存处理、数据返回的格式处理等
request.interceptors.response.use(
  (response) => {
    // 成功的回调
    const { data } = response

    return data
  },
  (error) => {
    // 失败的回调根据不同的状态码处理不同的错误
    ElMessage({
      type: 'error',
      message: error.response.status, //获取状态码
    })
    return Promise.reject(error)
  },
)

// 对外暴露
export default request
