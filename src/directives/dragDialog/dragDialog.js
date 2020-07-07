export default {
  bind(el, binding, vnode) {
    const headDom = el.querySelector('.el-dialog__header')
    const dialog = el.querySelector('.el-dialog')
    headDom.style.cssText = 'cursor:move;'
    function getStyle(element, attr) {
      if (element.currentStyle) {
        return element.currentStyle[attr]
      } else {
        return getComputedStyle(element, false)[attr]
      }
    }
    headDom.onmousedown = (e) => {
      const clickX = e.clientX
      const clickY = e.clientY
      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight

      const domTop = dialog.offsetTop
      const domleft = dialog.offsetLeft

      const minTop = -domTop
      const minleft = -domleft

      const maxTop = screenHeight - dialog.offsetHeight - domTop
      const maxLeft = screenWidth - dialog.offsetWidth - domleft
      const styTop = parseInt(getStyle(dialog, 'top'))
      const styLeft = parseInt(getStyle(dialog, 'left'))
      document.onmousemove = (e) => {
        const moveX = e.clientX
        const moveY = e.clientY
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
