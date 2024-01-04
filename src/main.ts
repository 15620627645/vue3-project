import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 暗黑模式style
import 'element-plus/theme-chalk/dark/css-vars.css'
//引入svg插件的配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象
import GlobalComponents from '@/components/index.ts'
//引入全局样式
import '@/styles/index.scss'
// 引入router
import router from '@/router/index'
// 引入store
import store from './store'
// 引用路由守卫
import '@/permisstion.ts'
// 引入指令
import { button } from '@/directive/permission'
// i18n
import i18n from './i18n/index.ts'

const app = createApp(App)
button(app)
// 使用store
app.use(store)
// 安装自定义插件
app.use(GlobalComponents)
// 使用ElementPlus插件
app.use(ElementPlus)
// 使用router插件
app.use(router)
// 使用i18n
app.use(i18n)
app.mount('#app')
