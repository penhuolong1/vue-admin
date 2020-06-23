<template>
  <div>
    <div :style="styleObj">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top: 0,
      styleObj: {
      }
    }
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  components: {

  },
  created () {
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let top = this.$el.getBoundingClientRect().top
      let width = this.$el.getBoundingClientRect().width
      console.log(width)
      if (top <= this.scrollTop) {
        this.top = this.scrollTop
        this.styleObj = {
          position: 'fixed',
          top: this.scrollTop + 'px',
          zIndex: this.zIndex,
          width: width + 'px'
        }
        return
      }
      this.reset()
    },
    reset () {
      this.styleObj = {}
    }
  }
}
</script>

<style scoped lang="scss">

</style>
