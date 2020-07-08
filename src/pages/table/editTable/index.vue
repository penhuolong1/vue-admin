<template>
  <div>
    <aside>table内编辑</aside>
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
        <template slot-scope="{row}">
          <span v-if="!row.edit" class="article-title">{{ row.title }}</span>
          <el-input v-else v-model="row.title" type="text"/>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="{row}">
          <el-button v-if="!row.edit" type="primary" @click="edit(row)">编辑</el-button>
          <span v-else>
            <el-button type="primary" @click="save(row)">保存</el-button>
            <el-button type="primary" @click="cancel(row)">取消</el-button>
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { list } from '@/api/article.js'
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      load: false,
      tableData: []
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
          this.tableData.forEach(item => {
            this.$set(item, 'edit', false)
            item.originalTitle = item.title
          })
        }
      })
    },
    // 点击编辑按钮切换到编辑的状态
    edit(row) {
      this.$set(row, 'edit', !row.edit)
    },
    save(row) {
      this.$set(row, 'edit', !row.edit)
    },
    cancel(row) {
      row.title = row.originalTitle
      this.$set(row, 'edit', !row.edit)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
