<template>
  <div class="content-wrapper">
    <aside>拖拽的dialog</aside>
    <el-button type="primary" @click="openDialog">打开dialog</el-button>
    <el-dialog v-dragDialog title="可移动的dialog" :visible.sync="visible">
      <div>可移动的dialog</div>
    </el-dialog>
  </div>
</template>

<script>
import dragDialog from '@/directives/dragDialog'
export default {
  data () {
    return {
      visible: false
    }
  },
  props: {

  },
  components: {

  },
  directives: {
    dragDialog
  },
  created () {

  },
  mounted () {

  },
  methods: {
    openDialog () {
      this.visible = true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
