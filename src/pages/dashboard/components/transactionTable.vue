<template>
  <div>
    <el-table
      v-if="tableData"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="Order_No"
        min-width="200"
      >
        <template slot-scope="scope">
          {{scope.row.order_no}}
        </template>
      </el-table-column>
      <el-table-column
        label="Price"
        width="195"
        align="center"
      >
      <template slot-scope="scope">
        ¥{{scope.row.price | toThousandFilter}}
      </template>
      </el-table-column>
      <el-table-column
        width="100"
        align="center"
        label="Status">
        <template slot-scope="scope">
          <el-tag :type="scope.row.state | statusFilter">{{scope.row.state | statusFilter}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {transactionList} from '@/api/dashboard'
export default {
  filters: {
    statusFilter (status) {
      const statusMap = {
        0: 'danger',
        1: 'success'
      }
      return statusMap[status]
    }
  },
  data () {
    return {
      tableData: []
    }
  },
  props: {

  },
  components: {

  },
  created () {
    this.getTransactionList()
  },
  mounted () {

  },
  methods: {
    getTransactionList () {
      transactionList().then(res => {
        let {code, data} = res.data
        if (code === 200) {
          this.tableData = data
          console.log(this.tableData)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
