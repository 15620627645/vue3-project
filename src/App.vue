<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// element-plus默认引文，引入国际化文件
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import userSettingStore from '@/store/moduls/setting.ts'

let settingStore = userSettingStore()
let locale = computed(() => {
  switch (settingStore.locale) {
    case 'zh':
      return zhCn
    case 'en':
      return en

    default:
      return ''
  }
})
</script>

<style scoped></style>
