<template>
    <div class="dashboard-wrapper">
      <panelGroup />
      <lineCharts />
      <el-row :gutter="20" style="margin-top: 20px;">
         <el-col :md="24" :lg="8" :xl="8">
           <radarCharts />
         </el-col>
         <el-col :md="24" :lg="8" :xl="8">
           <pieCharts />
         </el-col>
         <el-col :md="24" :lg="8" :xl="8">
           <barcharts />
         </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :md="24" :lg="12" :xl="12">
          <transactionTable />
        </el-col>
        <el-col :md="12" :lg="6" :xl="6">
          <todoList />
        </el-col>
        <el-col :md="12" :lg="6" :xl="6">
          <boxCard />
        </el-col>
      </el-row>
    </div>
</template>

<script>
import panelGroup from './components/panelGroup'
import lineCharts from './components/lineCharts'
import radarCharts from './components/radarCharts'
import pieCharts from './components/pieCharts'
import barcharts from './components/barcharts'
import transactionTable from './components/transactionTable'
import todoList from './components/todoList'
import boxCard from './components/boxCard'
export default {
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    panelGroup,
    lineCharts,
    radarCharts,
    pieCharts,
    barcharts,
    transactionTable,
    todoList,
    boxCard
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.dashboard-wrapper {
  background-color: #f0f2f5;
  padding: 20px;
  height: 100%;
}
</style>
