export default [
  // 动态路由的时候，任意路由也要放在动态路由中，并且放后面addrouter。因为刷新的时候页面没有加载完
  // 找不到匹配路由，如果有任意路由就会进入404，所以在她重定向之前不能进404.任意路由不能在路由表中
  // 要跟动态路由一起加载
  // 匹配任意路由（前面没有匹配上的路由进入此），vue2 中用*;vue3 中用/:pathMatch(.*)*
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/404', //重定向到404页面
    // component: () => import('@/views/404/index.vue'),
    meta: {
      title: '任意路由',
      hidden: false,
      isSideBar: true,
      sort: 97,
    },
    children: [], //必须有这个  菜单那边判断这个长度了
  },
]
