<template>
  <el-dropdown trigger="click">
    <span>
      <SvgIcon class="svgIcon" height="23" width="23" name="yuyan"></SvgIcon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          @click="updateLanguage(item.value)"
          v-for="(item, index) in languageList"
          :key="index"
          :disabled="settingStore.locale == item.value"
        >
          {{ item.lable }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { defineOptions, onMounted } from 'vue'
import userSettingStore from '@/store/moduls/setting'
import i18n from '@/i18n/index.ts'
defineOptions({
  name: 'Language',
})
let settingStore = userSettingStore()
let languageList = [
  {
    value: 'zh',
    lable: '简体中文',
  },
  {
    value: 'en',
    lable: 'English',
  },
]
let updateLanguage = (val: string) => {
  settingStore.locale = val
  i18n.global.locale = val as 'zh' | 'en'
}
onMounted(() => {
  // 刷新设置语言
  i18n.global.locale = settingStore.locale as 'zh' | 'en'
})
</script>

<style scoped lang="scss"></style>
