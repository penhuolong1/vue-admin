import Layout from '@/pages/layout'
export const asyncRoutes = [
  {
    path: '/dashboard',
    component: Layout,
    onlychild: true, // 判断是否只存在一个子节点如果只有一个则不显示父节点
    children: [
      {
        path: 'index',
        component: () => import('@/pages/dashboard/index'),
        name: '首页',
        meta: { title: 'Icons', icon: 'el-icon-location', noCache: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    onlychild: true, // 判断是否只存在一个子节点如果只有一个则不显示父节点
    children: [
      {
        path: 'index',
        component: () => import('@/pages/guide/index'),
        name: '引导页',
        meta: { title: 'Icons',
          icon: 'el-icon-location',
          roles: ['editor'],
          noCache: true }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: '权限',
    meta: {
      title: 'Permission',
      icon: 'el-icon-location',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/pages/permission/page'),
        name: '页面权限',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/pages/permission/directives'),
        name: '指令权限',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/pages/permission/role'),
        name: '角色权限',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    onlychild: true, // 判断是否只存在一个子节点如果只有一个则不显示父节点
    children: [
      {
        path: 'index',
        component: () => import('@/pages/dashboard/index'),
        name: '图标',
        meta: { title: 'Icons', icon: 'el-icon-location', noCache: true }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
      title: 'Nested Routes',
      icon: 'el-icon-location'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/pages/dashboard/index'), // Parent router-view
        name: '菜单1',
        meta: { title: 'Menu 1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/pages/dashboard/index'),
            name: '菜单1-1',
            meta: { title: 'Menu 1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/pages/dashboard/index'),
            name: '菜单1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: 'Menu 1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/pages/dashboard/index'),
                name: '菜单1-2-1',
                meta: { title: 'Menu 1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/pages/dashboard/index'),
                name: '菜单1-2-2',
                meta: { title: 'Menu 1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/pages/dashboard/index'),
            name: '菜单1-3',
            meta: { title: 'Menu 1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/pages/dashboard/index'),
        meta: { title: 'Menu 2' }
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/richText',
    alwaysShow: true, // will always show the root menu
    name: '组件',
    meta: {
      title: 'Permission',
      icon: 'el-icon-location',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'richText',
        component: () => import('@/pages/components/richText'),
        name: '富文本编辑'
      },
      {
        path: 'syncModal',
        component: () => import('@/pages/components/syncModal'),
        name: '父子组件同步数据'
      },
      {
        path: 'markdown',
        component: () => import('@/pages/components/markDown'),
        name: 'markdown'
      },
      {
        path: 'codeEditor',
        component: () => import('@/pages/components/code-editor'),
        name: '代码编辑'
      },
      {
        path: 'splitspan',
        component: () => import('@/pages/components/splitspan'),
        name: 'splitspan'
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
