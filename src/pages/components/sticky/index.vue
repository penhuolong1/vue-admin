<template>
  <div class="content-wrapper">
    <sticky :scroll-top="0">
      <aside>
        Sticky header, 当页面滚动到预设的位置会吸附在顶部
      </aside>
    </sticky>
    <div class="content">
      <p v-for="(item, index) in items" :key="index" class="item">{{ item }}</p>
      <sticky :scroll-top="20">
        <el-button type="primary">placeholder</el-button>
      </sticky>
      <p v-for="(item, index) in items" :key="index+20" class="item">{{ item }}</p>
      <p v-for="(item, index) in items" :key="index+40" class="item">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import sticky from '@/components/sticky'
export default {
  components: {
    sticky
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
      for (let i = 0; i < 20; i++) {
        this.items.push('placeholder')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  .item {
    line-height: 1.5;
  }
}
</style>
