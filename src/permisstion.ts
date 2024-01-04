// 路由守卫
import router from '@/router/index.ts'
import nprogress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //进度条样式必须引入，可以直接修改样式改变进度条
import userStore from './store/moduls/user'
import setting from './setting.ts'
// 路由前置守卫（跳转前调用）
router.beforeEach(async (to, from, next) => {
  // 修改项目名称
  document.title = `${setting.title}-${to.meta.title}`
  // to:要去的路由信息
  // from:当前的路由信息
  // next()放行或跳转到其他页面

  // 在组件外使用pinia，要引入大仓库作为小仓库的参数
  const user = userStore()
  const token = user.TOKEN
  const userName = user.userName
  nprogress.start() // 开启进度条
  nprogress.configure({ showSpinner: false }) //关闭进度条上的加载图标
  // 判断token是否存在（登录存在：不能到login。不存在：跳转到login）
  if (token) {
    if (to.path == '/login') {
      next('/')
    } else {
      //to.path不是登录页面，没有登录信息重新获取，获取不到即token过期
      // 跳转到登录页面重新登录
      if (userName) {
        next()
      } else {
        try {
          await user.getInfo()
          // 异步操作，路由没渲染完一直匹配不到路由，会一直循环执行beforeEach，直到渲染完成to匹配上路由执行
          //如果参数to不能找到对应的路由的话，就再执行一次beforeEach((to, from, next)直到其中的next({ ...to})能找到对应的路由为止。
          next({ ...to })
        } catch (error) {
          //获取不到token过期跳转到登录页面
          await user.loginOut()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    // token 不存在跳转到login
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
// 路由后置守卫（跳转完成后调用）
router.afterEach(() => {
  nprogress.done() // 进度完成
})
