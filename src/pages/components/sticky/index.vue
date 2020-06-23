<template>
  <div class="content-wrapper">
    <sticky :scrollTop="0">
      <aside>
        Sticky header, 当页面滚动到预设的位置会吸附在顶部
      </aside>
    </sticky>
    <div class="content">
      <p class="item" v-for="(item, index) in items" :key="index">{{item}}</p>
      <sticky :scrollTop="20">
        <el-button type="primary">placeholder</el-button>
      </sticky>
      <p class="item" v-for="(item, index) in items" :key="index+20">{{item}}</p>
      <p class="item" v-for="(item, index) in items" :key="index+40">{{item}}</p>
    </div>
  </div>
</template>

<script>
import sticky from '@/components/sticky'
export default {
  data () {
    return {
      items: []
    }
  },
  props: {

  },
  components: {
    sticky
  },
  created () {
    this.init()
  },
  mounted () {

  },
  methods: {
    init () {
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
