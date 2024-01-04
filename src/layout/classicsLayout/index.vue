<template>
  <div class="layout_contanier" :class="{ fold }">
    <!-- 菜单 -->
    <div class="layout_slider">
      <el-scrollbar class="scrollbar">
        <el-menu ellipsis :default-active="route.path" :collapse="fold">
          <menu-item :menuList="menuList"></menu-item>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航-->
    <div class="layout_tabbar">
      <logo class="logo"></logo>
      <tabbar class="tabbar"></tabbar>
    </div>
    <!-- main -->
    <div class="layout_main">
      <tags class="tags" />
      <layoutMain class="main" />
    </div>
  </div>
</template>

<script generic="T" setup lang="ts">
import tags from '../tag/index.vue'
import logo from '../logo/index.vue'
import menuItem from '../menu/index.vue'
import layoutMain from '../main/index.vue'
import tabbar from '../tabbar/index.vue'
import { defineProps } from 'vue'
defineProps<{
  menuList: T[]
  fold: T
  route: T
}>()
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
