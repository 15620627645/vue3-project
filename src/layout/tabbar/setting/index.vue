<template>
  <Language class="svgIcon" />
  <el-icon size="25" @click="updateFresh"><Refresh /></el-icon>
  <el-icon size="25" @click="fullScreen"><FullScreen /></el-icon>
  <el-icon size="25" @click="setting(true)"><Setting /></el-icon>
  <el-avatar :size="30" :src="user.avator" />
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ user.userName }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import userSettingStore from '@/store/moduls/setting.ts'
import userStore from '@/store/moduls/user.ts'
import { useRoute, useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import mittBtn from '@/utils/mittBtn'
import Language from './component/Language.vue'
let settingStore = userSettingStore()
// 刷新--把状态存到仓库，main监听变化即刷新
let updateFresh = () => {
  settingStore.fresh = !settingStore.fresh
}
// 仓库中获取用户信息
let user = userStore()
// 全屏方法用document实现
let fullScreen = () => {
  // dom对象的一个属性：获取当前窗口的状态（全屏：true；非全屏false）
  // 判断窗口状态这个不同的浏览器判断不同，项目中全屏这个可以用插件
  let flag = document.fullscreenElement //谷歌
  if (!flag) {
    // 实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏模式
    document.exitFullscreen()
  }
}
let route = useRoute()
let router = useRouter()
//退出登录
let loginOut = async () => {
  try {
    await user.loginOut()
    router.push({ path: '/login', query: { redirect: route.path } })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: error as any,
    })
  }
}
//设置
const setting = (visibale: boolean) => {
  mittBtn.emit('visibaleSetting', visibale)
}
</script>

<style scoped lang="scss">
.el-icon,
.svgIcon {
  margin-right: 15px;
  cursor: pointer;
}
</style>
