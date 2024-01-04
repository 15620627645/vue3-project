// 存储token
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
// 获取token
export const GET_TOKEN = (): string | null => {
  return localStorage.getItem('TOKEN')
}
// 移除token
export const REMOVE_TOKEN = () => {
  return localStorage.removeItem('TOKEN')
}
// 移除全部
export const REMOVE_ALL = () => {
  return localStorage.clear()
}
