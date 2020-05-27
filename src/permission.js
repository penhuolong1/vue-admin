import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  let role = ['editor']
  let ary = await store.dispatch('generateRoutes', role)
  router.addRoutes(ary)
  next()
})
