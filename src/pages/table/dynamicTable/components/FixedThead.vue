<template>
  <div>
    <el-checkbox-group v-model="checkList" style="margin-top: 5px;margin-bottom: 5px;">
      <el-checkbox label="date">date</el-checkbox>
      <el-checkbox label="name">name</el-checkbox>
      <el-checkbox label="address">address</el-checkbox>
    </el-checkbox-group>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="number"
        label="序号"
        width="180"/>
      <el-table-column
        v-for="item in tableList"
        :key="item"
        :prop="item"
        :label="item"/>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      tableData: [{
        number: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        number: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        number: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        number: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      checkList: ['date', 'name'],
      checkAll: ['date', 'name', 'address'],
      tableList: ['date', 'name']
    }
  },
  watch: {
    checkList(varArr) {
      this.tableList = this.checkAll.filter(item => varArr.indexOf(item) >= 0)
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
  }
}
</script>

<style scoped lang="scss">

</style>
