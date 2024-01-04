export default [
  {
    path: '/acl',
    name: 'Acl',
    component: () => import('@/layout/index.vue'),
    meta: {
      //元信息
      title: '权限管理', //页面标题
      hidden: true, //是否显示在菜单
      isSideBar: true,
      sort: 3,
      icon: 'User',
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        name: 'User',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          //元信息
          title: '用户管理', //页面标题
          hidden: true, //是否显示在菜单
          icon: 'User', //菜单图标
        },
        children: [],
      },
      {
        path: '/acl/role',
        name: 'Role',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          //元信息
          title: '角色管理', //页面标题
          hidden: true, //是否显示在菜单
          icon: 'Avatar',
        },
        children: [],
      },
      {
        path: '/acl/permission',
        name: 'Permission',
        component: () => import('@/views/acl/permission/index.vue'),
        meta: {
          //元信息
          title: '菜单管理', //页面标题
          hidden: true, //是否显示在菜单
          icon: 'List',
        },
        children: [],
      },
    ],
  },
]
