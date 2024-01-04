<template>
  <el-icon @click="foldClick" style="margin-right: 10px">
    <component :is="setingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight" v-if="breadcrumb">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      :to="item.path"
      v-show="item.meta.title"
    >
      <el-icon v-if="breadcrumbIcon">
        <component :is="item.meta.icon"></component>
      </el-icon>
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import userSetingStore from '@/store/moduls/setting.ts'
import { useRoute } from 'vue-router'
import userSettingStore from '@/store/moduls/setting.ts'
import { storeToRefs } from 'pinia'
// 根据设置显示/隐藏
let settingStore = userSettingStore()
let { breadcrumb, breadcrumbIcon } = storeToRefs(settingStore)
// fold放在仓库以便其他页面使用
let setingStore = userSetingStore()
function foldClick() {
  setingStore.fold = !setingStore.fold
}
//获取route以便获取当前路由的所有嵌套路由route.matched
let $route = useRoute()
</script>

<style scoped lang=""></style>
