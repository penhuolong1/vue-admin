import { asyncRoutes } from '@/router/'

// 查找路由中是否含有这个角色
function hasPermission (route, roles) {
  if (route.meta && route.meta.roles) {
    debugger
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}
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
  },
  mutations: {
    generateRoutes ({commit}, roles) {
      let routes = null
      if (roles.includes('admin')) {
        routes = asyncRoutes || []
      } else {
        routes = filterAsyncRoutes(asyncRoutes, roles)
      }
      console.log(routes)
      return routes
    }
  },
  getters: {
  },
  actions: {
  }
}
export default router
