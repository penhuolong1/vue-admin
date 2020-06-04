import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    name: '重定向',
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login')
  },
  {
    path: '/',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard/index'
  }
]

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
        meta: { title: 'Icons', icon: 'el-icon-location', noCache: true }
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
  }
]

// 处理 Vue-router 报NavigationDuplicated的可能解决方案 https://www.cnblogs.com/rever/p/11577322.html
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// 重置路由

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
