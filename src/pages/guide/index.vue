
<template>
  <div class="guide-wrapper">
    <aside>
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button type="primary" @click.prevent.stop="guide">开始引导</el-button>
  </div>
</template>

<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './step'
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      driver: null
    }
  },
  created() {

  },
  mounted() {
    this.driver = new Driver({
      allowClose: false // 添加这个属性或者在@click方法后面添加prevent.stop 不然会造成显示了又马上会触发关闭方法 会造成闪一下的效果
    })
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>

<style scoped lang="scss">
.guide-wrapper {
  padding: 20px;
}
</style>
