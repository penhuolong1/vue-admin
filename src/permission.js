import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  let role = ['admin']
  let ary = store.commit('generateRoutes', role)
  console.log('--------')
  console.log(store.commit('generateRoutes', role))
})
