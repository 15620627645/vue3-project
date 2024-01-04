// 登录接口携带参数的类型
export interface reqLogin {
  username: string
  password: string
}

// 返回接口统一有的参数
interface responseData {
  code: number
  message: string
  ok: boolean
}

// 登录接口返回的类型
export interface loginResponseData extends responseData {
  data: string
}

// 获取用户信息返回的类型
export interface infoResponseData extends responseData {
  data: {
    avatar: string
    buttons: string[]
    name: string
    roles: string[]
    routes: string[]
  }
}
// 获取用户列表
export interface userTable {
  page: number
  limit: number
}
