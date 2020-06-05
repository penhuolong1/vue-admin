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
    path: '/404',
    name: '404',
    component: () => import('@/pages/404/index')
  },
  {
    path: '/',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard/index'
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
