<template>
  <div class="logo_container" v-if="settingStore.logoHidden">
    <img :src="logSetting.img" alt="" />
    <span>{{ logSetting.title }}</span>
  </div>
</template>

<script setup lang="ts">
import logSetting from '@/setting'
import userSettingStore from '@/store/moduls/setting.ts'
let settingStore = userSettingStore()
</script>

<style scoped lang="scss">
.logo_container {
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-menu-logo-height;
  padding: 20px;
  color: black;
  img {
    height: 30px;
  }
  span {
    flex-shrink: 0;
    margin-left: 10px;
    font-size: $base-logo-title-fontSize;
  }
}
</style>
