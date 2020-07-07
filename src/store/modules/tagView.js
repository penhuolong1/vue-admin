
const tagView = {
  state: {
    tagViewList: [], // 路由标签列表
    tagViewActiveIndex: 0
  },
  getters: {
    tagViewList: state => state.tagViewList,
    tagViewActiveIndex: state => state.tagViewActiveIndex
  },
  mutations: {
    ADD_TAG: (state, view) => {
      const list = state.tagViewList
      if (!list && list.length === 0) {
        state.tagViewList.push(view)
      } else {
        const index = list.findIndex(item => item.path === view.path)
        if (index < 0) {
          state.tagViewList.push(view)
          state.tagViewActiveIndex = list.length - 1
        } else {
          state.tagViewActiveIndex = index
        }
      }
    },
    DEL_TAG: (state, index) => {
      state.tagViewList.splice(index, 1)
      if (index === state.tagViewActiveIndex) { // 如果删除是本路由
        state.tagViewActiveIndex = state.tagViewActiveIndex - 1
      }
    },
    SET_INDEX: (state, index) => {
      state.tagViewActiveIndex = index
    },
    DEL_ALL_LIST: (state) => {
      state.tagViewList = []
    }
  },
  actions: {
  }
}
export default tagView
