<template>
  <div class="content-wrapper">
    <aside>用sortablej实现可拖拉的select</aside>
    <el-select ref="dragSelect" v-model="value1" class="drag-select" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    {{ value1 }}
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      options: [{
        value: '黄金糕',
        label: '黄金糕'
      }, {
        value: '双皮奶',
        label: '双皮奶'
      }, {
        value: '蚵仔煎',
        label: '蚵仔煎'
      }, {
        value: '龙须面',
        label: '龙须面'
      }, {
        value: '北京烤鸭',
        label: '北京烤鸭'
      }],
      value1: [],
      sortable: null
    }
  },
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const el = this.$refs.dragSelect.$el.querySelectorAll('.el-select__tags > span')[0]
      this.sortable = new Sortable(el, {
        onEnd: e => {
          this.value1 = swapArr(this.value1, e.newIndex, e.oldIndex)
        }
      })
    }
  }
}
// 交换数组中两个位置元素
function swapArr(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}
</script>

<style scoped lang="scss">
.drag-select {
  /deep/ .sortable-ghost {
    opacity: .8;
    color: #fff!important;
    background: #42b983!important;
  }
  /deep/ .el-select__tags {
    span {
      cursor: pointer;
    }
  }
}
</style>
