<template>
  <component
    :fold="setingStore.fold"
    :menu-list="menuList"
    :route="$route"
    :is="component[layout]"
  ></component>
  <settingDrawer />
</template>

<script setup lang="ts">
import verticalLayout from './verticalLayout/index.vue'
import classicsLayout from './classicsLayout/index.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import userSetingStore from '@/store/moduls/setting.ts'
import settingDrawer from './tabbar/setting/component/settingDrawer.vue'
import userSettingStore from '@/store/moduls/setting.ts'
import { storeToRefs } from 'pinia'
let settingStore = userSettingStore()
let { layout } = storeToRefs(settingStore)
// 动态组件
let component = {
  classics: classicsLayout,
  vertical: verticalLayout,
}
// 获取路由表信息(全局路由)
let $router = useRouter()
let routerList = $router.getRoutes()
let menuList = ref()
menuList.value = routerList.filter((item) => {
  return item.meta.isSideBar
})
// 菜单根据router表中的meta.sort排序
menuList.value = menuList.value.sort(
  (a: any, b: any) => a.meta.sort - b.meta.sort,
)

// 获取当前路由(以便获取当前路由path，刷新页面默认激活菜单,因为每个菜单的ID就是path)
let $route = useRoute()
// 获取store（折叠）
let setingStore = userSetingStore()
</script>

<style scoped lang="scss"></style>
