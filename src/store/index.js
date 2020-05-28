import Vue from 'vue'
import Vuex from 'vuex'

import router from './modules/router'
import user from './modules/user'
import tagView from './modules/tagView'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    router,
    user,
    tagView
  }
})
