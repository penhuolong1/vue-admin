<template>
  <transition name="fade">
    <div class="back-to-top-icon" @click="backtoTop" v-show="isVisible">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>
let timer = null
export default {
  data () {
    return {
      isVisible: false
    }
  },
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    }
  },
  components: {

  },
  created () {

  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    if (timer) {
      clearInterval(timer)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 处理滚动事件
    handleScroll () {
      this.isVisible = window.pageYOffset > this.visibilityHeight
    },
    // 返回顶部
    backtoTop () {
      timer = setInterval(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        var ispeed = Math.floor(-scrollTop / 6)
        console.log(timer)
        if (scrollTop == 0) {
          clearInterval(timer)
          return
        }
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed
      }, 30)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/styles/variables.scss';
.back-to-top-icon {
  position: fixed;
  bottom: 100px;
  right: 100px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
  cursor: pointer;
  &:hover {
    background-color: #f2f6fc;
  }
  i {
    color: $themeColor;
  }
}
</style>
