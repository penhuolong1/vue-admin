import store from '@/store'
export default {
  inserted: function (el, binding) {
    let role = store.getters.roles[0]
    let permissionValue = binding.value
    if (permissionValue.indexOf(role) === -1) { // 假如在没有该权限则删该元素
      el.remove()
    }
  }
}
