// 获取路由权限
import store from '@/store'
import userStore from '@/store/moduls/user'
export const button = (app: any) => {
  // 需要app挂载-创建全局指令
  // v-hasBut按钮权限指令
  app.directive('permission', {
    mounted(el: HTMLElement, options: any) {
      // el:指令所绑定的元素，可以操作dom
      // binding：里面有很多方法属性，例：binding.value获取指令值
      // 按钮菜单中没有的按钮在dom中干掉
      //el.parentNode获取当前节点的父节点
      // 删除父节点下的子节点
      const user = userStore(store)
      if (!user.buttons.includes(options.value as never)) {
        // el.parentNode.removeChild(el)//删除节点
        el.style.display = 'none' //隐藏元素
      }
    },
  })
}
