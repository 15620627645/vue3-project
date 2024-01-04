import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 创建大仓库
const store = createPinia()
store.use(piniaPluginPersistedstate)
export default store
