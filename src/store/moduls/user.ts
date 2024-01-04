import { defineStore } from 'pinia'
import { login, info, loginout } from '@/api/user/index'
import { ref } from 'vue'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import type { reqLogin, loginResponseData, infoResponseData } from './type.ts'
import { useRouter } from 'vue-router'
// 组合API写法
const userStore = defineStore('user', () => {
  // 数据要是响应式的
  const TOKEN = ref(GET_TOKEN()) //token
  const userName = ref('') //用户名称
  const avator = ref('') //用户头像
  const buttons = ref([]) //按钮权限

  const router = useRouter() //router
  // 获取非固定菜单（动态菜单）
  const routers = async () => {
    const routesData: any[] = []
    const modules = import.meta.glob('@/router/modules/*.ts')
    for (const path in modules) {
      const mod = modules[path]
      const res: any = await mod()
      routesData.push(...res.default)
    }
    return routesData
  }
  // 菜单
  const setMenu = (getRoutes: any, routes: any) => {
    return getRoutes.filter((item) => {
      if (routes.includes(item.name)) {
        if (item.children.length > 0) {
          item.children = setMenu(item.children, routes)
        }
        return true
      }
    })
  }
  // 获取用户信息
  const getInfo = async () => {
    const result: infoResponseData = await info()
    if (result.code == 200) {
      avator.value = result.data.avatar
      userName.value = result.data.name
      buttons.value = result.data.buttons
      // 动态路由
      const routersMenu = await routers()
      const menu = setMenu(routersMenu, [...result.data.routes, 'NotFound'])

      menu.forEach((element: any) => {
        router.addRoute(element)
      })

      return 'ok'
    } else {
      return Promise.reject(result.message)
    }
  }
  // 登录
  const loginAPI = async (data: reqLogin) => {
    const result: loginResponseData = await login(data)
    if (result.code == 200) {
      TOKEN.value = result.data as string
      SET_TOKEN(result.data as string)
      return 'ok'
    } else {
      return Promise.reject('请求失败')
    }
  }
  // 退出登录
  const loginOut = async () => {
    const result: any = await loginout()
    if (result.code == 200) {
      TOKEN.value = ''
      userName.value = ''
      avator.value = ''
      REMOVE_TOKEN()
      return 'ok'
    } else {
      return Promise.reject('请求失败')
    }
  }
  return {
    TOKEN,
    userName,
    avator,
    buttons,
    loginAPI,
    getInfo,
    loginOut,
  }
})
export default userStore
