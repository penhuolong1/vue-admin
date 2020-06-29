export default {
  bind (el, binding, vnode) {
    let headDom = el.querySelector('.el-dialog__header')
    let dialog = el.querySelector('.el-dialog')
    headDom.style.cssText = 'cursor:move;'
    function getStyle (element, attr) {
      if (element.currentStyle) {
        return element.currentStyle[attr]
      } else {
        return getComputedStyle(element, false)[attr]
      }
    }
    headDom.onmousedown = (e) => {
      let clickX = e.clientX
      let clickY = e.clientY
      let screenWidth = document.body.clientWidth
      let screenHeight = document.body.clientHeight

      let domTop = dialog.offsetTop
      let domleft = dialog.offsetLeft

      let minTop = -domTop
      let minleft = -domleft

      let maxTop = screenHeight - dialog.offsetHeight - domTop
      let maxLeft = screenWidth - dialog.offsetWidth - domleft
      let styTop = parseInt(getStyle(dialog, 'top'))
      let styLeft = parseInt(getStyle(dialog, 'left'))
      document.onmousemove = (e) => {
        let moveX = e.clientX
        let moveY = e.clientY
        let left = moveX - clickX
        let top = moveY - clickY

        // 处理边界
        if (left < minleft) {
          left = minleft
        }
        if (left > maxLeft) {
          left = maxLeft
        }
        if (top < minTop) {
          top = minTop
        }
        if (top > maxTop) {
          top = maxTop
        }
        dialog.style.cssText += `top: ${top + styTop}px;left: ${left + styLeft}px;`
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
