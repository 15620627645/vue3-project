import SvgIcon from './SvgIcon/index.vue'
import TemplateMain from './TemplateMain/index.vue'
// 注册所有element的icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 对外暴露所有全局组件并注册,全局组件对象
const globalComponent = { SvgIcon, TemplateMain }
// 对外暴露插件对象
export default {
  // 务必叫install方法，app.use()方法会自动调用install方法
  install(app: any) {
    Object.keys(globalComponent).forEach((key) => {
      //注册所有对象为全局组件
      app.component(key, globalComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
