<template>
  <div class="content-wrapper">
    <aside>页面滚动到指定位置会在右下角出现返回顶部按钮</aside>
    <div v-for="(item, index) in items" :key="index">
      <p class="bc-top-item">{{ item }}</p>
    </div>
    <backToTop/>
  </div>
</template>

<script>
import backToTop from '@/components/backToTop/index'
export default {
  components: {
    backToTop
  },
  props: {

  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.init()
  },
  mounted() {

  },
  methods: {
    init() {
      for (let i = 0; i < 100; i++) {
        this.items.push('placeholder')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bc-top-item {
  line-height: 1.5;
}
</style>
