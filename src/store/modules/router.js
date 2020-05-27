import { asyncRoutes } from '@/router/'

// 查找路由中是否含有这个角色
function hasPermission (route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
// 通过角色过滤获取有用的路由
function filterAsyncRoutes (routes, roles) {
  if (!routes && routes.length === 0) {
    return []
  }
  let ary = []
  routes.forEach(item => {
    let tmp = {...item}
    if (hasPermission(tmp, roles)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      ary.push(tmp)
    }
  })
  return ary
}

const router = {
  state: {
    routers: []
  },
  mutations: {
    setRouters (state, routes) {
      state.routers = routes
    }
  },
  getters: {
    getRouters: state => state.routers
  },
  actions: {
    generateRoutes ({commit}, roles) {
      return new Promise(resolve => {
        let routes = null
        if (roles.includes('admin')) {
          routes = asyncRoutes || []
        } else {
          routes = filterAsyncRoutes(asyncRoutes, roles)
        }
        commit('setRouters', routes)
        resolve(routes)
      })
    }
  }
}
export default router
