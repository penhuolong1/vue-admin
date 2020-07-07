<template>
  <div>
    <div :style="styleObj">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  components: {

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
  data() {
    return {
      top: 0,
      styleObj: {
      }
    }
  },
  created() {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = this.$el.getBoundingClientRect().top
      const width = this.$el.getBoundingClientRect().width
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
    reset() {
      this.styleObj = {}
    }
  }
}
</script>

<style scoped lang="scss">

</style>
