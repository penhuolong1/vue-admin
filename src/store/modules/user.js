import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { login, logout, userInfo } from '@/api/user'
const user = {
  state: {
    name: '',
    avator: '',
    token: getToken(),
    roles: []
  },
  getters: {
    name: state => state.name,
    avator: state => state.avator,
    token: state => state.token,
    roles: state => state.roles
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATOR: (state, avator) => {
      state.avator = avator
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 登陆
    login: ({ commit }, userInfo) => {
      const { name, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ name, password }).then(res => {
          const { code, token } = res.data
          if (code === 200) {
            commit('SET_TOKEN', token)
            setToken(token)
          }
          resolve(code)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出
    loginOut: ({ commit }) => {
      return new Promise((resolve, reject) => {
        logout().then(res => {
          const { code, token } = res.data
          if (code === 200) {
            commit('SET_TOKEN', token)
            removeToken()
            location.reload()
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户信息
    userInfo: ({ commit }, token) => {
      return new Promise((resolve, reject) => {
        userInfo({ token }).then(res => {
          const { code, data } = res.data
          if (code === 200) {
            commit('SET_NAME', data.name)
            commit('SET_ROLES', data.roles)
          }
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    changeRole: ({ commit }, role) => {
      commit('SET_ROLES', [role])
      const token = `${role}-token`
      console.log('12333333')
      setToken(token)
    }
  }
}
export default user
