const tagView = {
  state: {
    isOpen: false // 用来存菜单打开还是关闭的状态 如果要做到刷新仍然保持状态的话可以存在浏览器里
  },
  getters: {
    isOpen: state => state.isOpen
  },
  mutations: {
    SET_ISOPEN: (state, isopen) => {
      state.isOpen = isopen
    }
  },
  actions: {

  }
}
export default tagView
