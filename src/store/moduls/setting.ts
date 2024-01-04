import { defineStore } from 'pinia'
import type { tagMenuItem } from '@/layout/menu/type.ts'

// 选择API写法
const userSettingStore = defineStore({
  id: 'settingStore',
  state: () => {
    return {
      fold: false, //菜单是否折叠
      fresh: false, //是否点击刷新按钮
      layout: 'classics', //布局
      breadcrumb: true, //面包屑
      breadcrumbIcon: true, //面包屑图标
      themeColor: '#409eff', //主题颜色
      dark: true, //暗黑模式 true关。false开
      logoHidden: true, //是否显示logo
      tags: [
        {
          path: '/home',
          name: 'home',
          meta: { title: '首页' },
        },
      ], //标签
      tagsHidden: true, //是否显示标签
      keepAlives: ['home'], //需要缓存的
      locale: 'zh', //国际化
    }
  },
  actions: {
    setTagsAndKeep(val: tagMenuItem) {
      if (val.path == '/screen') return
      // every判断所有元素都满足条件返回true
      if (this.tags.every((ele: tagMenuItem) => ele.path != val.path)) {
        this.tags.push(val as never)
        this.keepAlives.push(val.name as never)
      }
    },
    removeTagsAndKeep(val: tagMenuItem) {
      this.tags = this.tags.filter((ele: any) => ele.path != val.path)
      this.keepAlives = this.keepAlives.filter((name) => name != val.name)
    },
  },
  persist: true,
})

export default userSettingStore
