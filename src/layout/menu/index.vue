<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="item.meta.hidden">
      <el-menu-item
        class="menuItem"
        :index="item?.children[0]?.path ?? item.path"
        v-if="item?.children?.length === 0 || item?.children?.length === 1"
        @click="
          goRoute(
            item?.children[0]?.path ?? item.path,
            item?.children[0] ?? item,
          )
        "
      >
        <el-icon>
          <component
            :is="item?.children[0]?.meta.icon ?? item.meta.icon"
          ></component>
        </el-icon>
        <template #title>
          {{ item?.children[0]?.meta.title ?? item.meta.title }}
        </template>
      </el-menu-item>

      <el-sub-menu :index="item.path" v-else>
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <!-- 递归调用组件，组件一定要有name名称 vue2的script写法才有 -->
        <menuListPage :menuList="item.children"></menuListPage>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import userSettingStore from '@/store/moduls/setting.ts'
import type { tagMenuItem } from './type.ts'
let settingStore = userSettingStore()
defineProps(['menuList'])
const $router = useRouter()
const goRoute = (path: string, item: tagMenuItem) => {
  $router.push(path)
  setTag(item)
}
// tag添加
const setTag = (item: tagMenuItem) => {
  settingStore.setTagsAndKeep(item)
}
</script>
<script lang="ts">
//递归调用组件，一定要写name，script的lang，要都一样，要不报错
export default {
  name: 'menuListPage',
}
</script>

<style scoped lang="scss">
:deep(.el-menu-item),
.menuItem {
  &.is-active {
    background: var(--el-color-primary-light-7);
    &::before {
      position: absolute;
      left: 0;
      width: 8px;
      height: 100%;
      content: '';
      background-color: var(--el-color-primary-light-5);
    }
  }
}
</style>
