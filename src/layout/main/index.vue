<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade">
      <keep-alive :include="keepAlives">
        <component :is="Component" v-if="fresh" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import { watch, ref, nextTick, computed } from 'vue'
import userSetingStore from '@/store/moduls/setting.ts'
import { useRoute } from 'vue-router'
let fresh = ref(true)
// 根据仓库的fresh实现刷新功能（创建销毁的过程）
let setingStore = userSetingStore()
let keepAlives = computed(() => setingStore.keepAlives)
let $route = useRoute()
// 监听
watch(
  // 响应数据要用函数的方式才能监听
  () => setingStore.fresh,
  () => {
    // 销毁
    fresh.value = false
    setingStore.removeTagsAndKeep({ ...$route } as any)
    // DOM更新之后执行回调函数（获取最新dom）
    nextTick(() => {
      // dom已更新可以操作，已经销毁了，可以重建了
      fresh.value = true
      setingStore.setTagsAndKeep({ ...$route } as any)
    })
  },
)
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
