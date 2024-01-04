// 通过vue-routervue-router插件实现路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
// Webpack环境require.context导入多个文件，导入modules下所有以.ts结尾的文件
// const modulesFiles = require.context('./modules', true, /\.ts$/)

// vite环境 import.meta.glob导入多个文件
//key:()=>{} value是函数调用返回promise

// const modules = import.meta.glob('@/router/modules/*.ts')
// for (const path in modules) {
//   const mod = modules[path]
//   const res: any = await mod()
//   routesData.push(...res.default)
// }
import routesData from './modules/routes'

const router = createRouter({
  // 路由模式hash
  history: createWebHashHistory(),
  routes: routesData,
  // 滚动行为
  // scrollBehavior() {
  //   return {
  //     left: 101,
  //     top: 101,
  //   }
  // },
})

export default router
