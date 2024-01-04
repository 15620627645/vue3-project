<template>
  <el-menu
    mode="horizontal"
    :default-active="route.path"
    class="tags"
    v-if="settingStore.tagsHidden"
  >
    <template v-for="item in tags" :key="item.path">
      <el-menu-item :index="item.path" @click="goRoute(item.path)">
        {{ item.meta.title }}
        <el-icon v-if="item.path != '/home'" @click.stop="removeTag(item)">
          <Close />
        </el-icon>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import userSettingStore from '@/store/moduls/setting.ts'
import { defineOptions, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { tagMenuItem } from '../menu/type'
defineOptions({
  name: '',
})
let isIcon = ref(false)

let route = useRoute()
let $router = useRouter()
let settingStore = userSettingStore()
let tags = computed(() => settingStore.tags)
// 移除tag
const removeTag = async (item: tagMenuItem) => {
  await settingStore.removeTagsAndKeep(item)
  $router.push(tags.value[tags.value.length - 1].path)
}
// 跳转页面
const goRoute = (path: string) => {
  $router.push(path)
  isIcon.value = true
}
</script>

<style scoped lang="scss">
.el-menu-item {
  font-weight: 600;
  .el-icon {
    display: none;
    height: 12px;
    width: 12px;
    margin-left: 10px;
    vertical-align: middle;
    font-size: 12px;
    &:hover {
      background: var(--el-color-primary-light-6);
      border-radius: 50%;
    }
  }
  &.is-active {
    .el-icon {
      display: block;
    }
  }
}
</style>
