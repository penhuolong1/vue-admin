<template>
  <div>
    <aside>可拖拽的table</aside>
    <el-table
      v-loading="load"
      ref="dragTable"
      :data="tableData"
      border
      class="article-table"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180"/>
      <el-table-column
        prop="timestamp"
        label="日期"/>
      <el-table-column
        prop="name"
        label="姓名"/>
      <el-table-column
        label="标题">
        <template slot-scope="scope">
          <span class="article-title">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="important"
        label="重要性"/>
      <el-table-column
        prop="type"
        label="类型"/>
      <el-table-column
        prop="status"
        label="状态"/>
    </el-table>
    <div>{{ order }}</div>
  </div>
</template>

<script>
import { list } from '@/api/article.js'
import Sortable from 'sortablejs'
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      tableData: [],
      load: true,
      sortable: null,
      order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  created() {
    this.getList()
  },
  mounted() {

  },
  methods: {
    getList() {
      this.load = true
      list().then(res => {
        const { code, data } = res.data
        if (code === 200) {
          this.load = false
          this.tableData = data
          this.$nextTick(() => {
            this.initSortable()
          })
        }
      })
    },
    // 初始化sortable插件
    initSortable() {
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
        },
        onEnd: e => {
          this.order = swapArr(this.order, e.newIndex, e.oldIndex)
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
/deep/ .sortable-ghost {
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
.article-table {
  .article-title {
    color: #337ab7;
  }
}
</style>
