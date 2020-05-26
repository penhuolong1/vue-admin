import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: '首页',
        meta: {title: '首页', icon: 'el-icon-menu', affix: true}
      }
    ]
  }
]

export const asyncRoutes = [
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
        component: () => import('@/pages/dashboard/index'),
        name: '页面权限',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/pages/dashboard/index'),
        name: '指令权限',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/pages/dashboard/index'),
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
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/pages/dashboard/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu 1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/pages/dashboard/index'),
            name: 'Menu1-1',
            meta: { title: 'Menu 1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/pages/dashboard/index'),
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: 'Menu 1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/pages/dashboard/index'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu 1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/pages/dashboard/index'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu 1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/pages/dashboard/index'),
            name: 'Menu1-3',
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
  }
]

export default new Router({
  routes: [...constantRoutes, ...asyncRoutes]
})
