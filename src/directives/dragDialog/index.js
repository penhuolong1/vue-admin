import dragDialog from './dragDialog'

const install = function (Vue) {
  Vue.directive('dragDialog', dragDialog)
}
if (window.Vue) {
  window.dragDialog = dragDialog
  Vue.use(install); // eslint-disable-line
}

dragDialog.install = install
export default dragDialog
