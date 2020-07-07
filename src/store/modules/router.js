import { asyncRoutes } from '@/router/asyncRoutes'

// 查找路由中是否含有这个角色
function hasPermission(route, roles) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
// 通过角色过滤获取有用的路由
function filterAsyncRoutes(routes, roles) {
  if (!routes && routes.length === 0) {
    return []
  }
  const ary = []
  routes.forEach(item => {
    const tmp = { ...item }
    if (hasPermission(tmp, roles)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      ary.push(tmp)
    }
  })
  return ary
}
// 通过名字匹配路由
function matchRoutes(routes, name) {
  return routes.find(item => {
    if (item.children) {
      return matchRoutes(item.children, name)
    } else {
      return item.name === name
    }
  })
}

const router = {
  state: {
    routers: [],
    navigatineRoutes: []
  },
  mutations: {
    setRouters(state, routes) {
      state.routers = routes
    },
    SET_NAVI_ROUTE(state, name) {
      state.navigatineRoutes = matchRoutes(asyncRoutes, name)
    }
  },
  getters: {
    getRouters: state => state.routers,
    navigatineRoutes: state => state.navigatineRoutes
  },
  actions: {
    generateRoutes({ commit }, roles) {
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
