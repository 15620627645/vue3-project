<template>
  <div class="tempateMain">
    <el-card class="title">
      <div>{{ titleName ?? $route.meta.title }}</div>
      <div><slot name="button" /></div>
    </el-card>
    <el-card class="main">
      <slot name="main" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineOptions, defineProps } from 'vue'
import { useRoute } from 'vue-router'
defineOptions({
  name: 'tempalteMain',
})
defineProps<{
  titleName?: string
}>()
let $route = useRoute()
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
