<template>
  <div class="tabber">
    <!-- 面包屑 -->
    <div class="tabber_left">
      <breadcrumb />
    </div>
    <!-- setting配置 -->
    <div class="tabber_right">
      <setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import breadcrumb from './breadcrumb/index.vue'
import setting from './setting/index.vue'
</script>

<style scoped lang="scss">
.tabber {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .tabber_left {
    display: flex;
    align-items: center;
  }
  .tabber_right {
    display: flex;
    align-items: center;
    ::v-deep .el-avatar {
      margin-right: 15px;
    }
  }
}
</style>
