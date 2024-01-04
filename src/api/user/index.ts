import request from '@/utils/request'
import type {
  reqLogin,
  loginResponseData,
  infoResponseData,
  userTable,
} from './type.ts'

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  INFO_URL = '/admin/acl/index/info',
  LOUINOUT_URL = '/admin/acl/index/logout',
  USER_GETUSERTABLE = '/admin/acl/user/',
}
// 登录
export function login(data: reqLogin) {
  // 范型的第二个参数是返回值的类型
  return request<any, loginResponseData>({
    url: API.LOGIN_URL,
    method: 'post',
    data, //post data(请求体);get params(查询参数)
  })
}
// 获取用户信息
export const info = () => {
  // request.get<any, any>(API.INFO_URL)
  return request<any, infoResponseData>({
    url: API.INFO_URL,
    method: 'get',
  })
}
// 退出
export const loginout = () => {
  return request<any>({
    url: API.LOUINOUT_URL,
    method: 'post',
  })
}
// 获取用户列表
export const getUserTable = (params: userTable) => {
  return request<any>({
    url: `${API.USER_GETUSERTABLE}${params.page}/${params.limit}`,
    method: 'get',
  })
}
