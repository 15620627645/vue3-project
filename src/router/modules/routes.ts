export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      //元信息
      title: '登录', //页面标题
      hidden: false, //是否显示在菜单
      isSideBar: true,
      sort: 99,
    },
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      //元信息
      title: '数据大屏', //页面标题
      hidden: true, //是否显示在菜单
      icon: 'Platform',
      isSideBar: true,
      sort: 2,
    },
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      //元信息
      title: '首页', //页面标题
      hidden: true, //是否显示在菜单
      isSideBar: true, //用getRoutes获取已经添加的路由，此方法会把所有层级变为一层,用这个字段区分哪些是路由
      sort: 1, //排序菜单显示的位置
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          //元信息
          title: '首页', //页面标题
          hidden: true, //是否显示在菜单
          icon: 'User', //菜单图标
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: false,
      isSideBar: true,
      sort: 98,
    },
  },
]
