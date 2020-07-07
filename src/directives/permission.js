import store from '@/store'
export default {
  inserted: function(el, binding) {
    const role = store.getters.roles[0]
    const permissionValue = binding.value
    if (permissionValue.indexOf(role) === -1) { // 假如在没有该权限则删该元素
      el.remove()
    }
  }
}
