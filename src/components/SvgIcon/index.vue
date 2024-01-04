<template>
  <!-- svg:图标外层节点，内部需要与use结合使用 -->
  <svg :style="{ width, height }">
    <!--xlink:href执行用哪一个图标，属性值务必是#icon-图标名称  -->
    <!-- fill属性可以设置图标的颜色 -->
    <use :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  // 图标名称
  name: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
