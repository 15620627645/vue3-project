<template>
  <el-drawer v-model="visibale" title="设置" size="300px">
    <el-divider>
      <el-icon><Grid /></el-icon>
      页面布局
    </el-divider>
    <div class="layout">
      <!-- 经典布局classics -->
      <el-tooltip content="经典" placement="top">
        <div
          class="vertical-layout classics-layout"
          :class="{ 'click-layout': layout == 'classics' }"
          @click="setLoyout('classics')"
        >
          <div class="hearder-classics"></div>
          <div class="meun-classics"></div>
          <div class="main-classics">
            <el-icon v-if="layout == 'classics'">
              <CircleCheckFilled />
            </el-icon>
          </div>
        </div>
      </el-tooltip>
      <!-- 纵向布局vertical -->
      <el-tooltip content="纵向" placement="top">
        <div
          class="vertical-layout"
          :class="{ 'click-layout': layout == 'vertical' }"
          @click="setLoyout('vertical')"
        >
          <div class="menu-vertical"></div>
          <div class="right-vertical">
            <div class="hearder-vertical"></div>
            <div class="main-vertical">
              <el-icon v-if="layout == 'vertical'">
                <CircleCheckFilled />
              </el-icon>
            </div>
          </div>
        </div>
      </el-tooltip>
    </div>
    <el-divider>
      <el-icon><Avatar /></el-icon>
      全局主题
    </el-divider>
    <div class="theme-item">
      <span>主题颜色</span>
      <el-color-picker
        v-model="themeColor"
        show-alpha
        @change="setThemeColor(themeColor)"
      />
    </div>
    <div class="theme-item">
      <span>暗黑模式</span>
      <el-switch
        v-model="dark"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
        @change="themeDark(dark)"
      />
    </div>
    <el-divider>
      <el-icon><Tools /></el-icon>
      界面设置
    </el-divider>
    <div class="theme-item">
      <span>面包屑</span>
      <el-switch v-model="breadcrumb" />
    </div>
    <div class="theme-item">
      <span>面包屑图标</span>
      <el-switch v-model="breadcrumbIcon" />
    </div>
    <div class="theme-item">
      <span>LOGO</span>
      <el-switch v-model="logoHidden" />
    </div>
    <div class="theme-item">
      <span>便签栏</span>
      <el-switch v-model="tagsHidden" />
    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, defineOptions, onMounted } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
defineOptions({
  name: 'settingDrwer',
})
import { setThemeColor, dark as themeDark } from '@/hook/useTheme.ts'
import mittBtn from '@/utils/mittBtn'
import userSettingStore from '@/store/moduls/setting.ts'
// store数据
let settingStore = userSettingStore()
let {
  layout,
  breadcrumb,
  breadcrumbIcon,
  themeColor,
  dark,
  logoHidden,
  tagsHidden,
} = storeToRefs(settingStore)
// 设置主题色和是否暗黑模式
onMounted(() => {
  setThemeColor(themeColor.value)
  themeDark(dark.value)
})
// 打开弹窗
let visibale = ref(false)
mittBtn.on('visibaleSetting', (params) => {
  visibale.value = params as boolean
})
// 样式布局 classics｜vertical
const setLoyout = (loyoutType: 'classics' | 'vertical') => {
  layout.value = loyoutType
}
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
