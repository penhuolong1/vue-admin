import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth.js'

const whiteList = ['/login'] // 白名单
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      let hasRole = store.getters.roles && store.getters.roles.length > 0
      if (hasRole) {
        next()
      } else {
        await store.dispatch('userInfo', token)
        const role = store.getters.roles
        let ary = await store.dispatch('generateRoutes', role)
        router.addRoutes(ary)
        next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 如果路由没有动态加载完会导致刷新的时候出现空白屏
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
