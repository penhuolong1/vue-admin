<template>
  <div class="content-wrapper">
    <aside>可拖拽的看板基于Vue.Draggable</aside>
    <el-row :gutter="20">
      <el-col :span="8">
        <kanban :title="'todo'" :list.sync="list1" :group="group"></kanban>
        <p v-for="(item, index) in list1" :key="index">{{item.name}}</p>
      </el-col>
      <el-col :span="8">
        <kanban :title="'working'" :list.sync="list2" :group="group"></kanban>
      </el-col>
      <el-col :span="8">
        <kanban :title="'done'" :list.sync="list3" :group="group"></kanban>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import kanban from '@/components/kanban'
export default {
  data () {
    return {
      group: 'mission',
      list1: [
        { name: 'Mission1', id: 1 },
        { name: 'Mission2', id: 2 },
        { name: 'Mission3', id: 3 },
        { name: 'Mission4', id: 4 }
      ],
      list2: [
        { name: 'Mission5', id: 5 },
        { name: 'Mission6', id: 6 },
        { name: 'Mission7', id: 7 }
      ],
      list3: [
        { name: 'Mission8', id: 8 },
        { name: 'Mission9', id: 9 },
        { name: 'Mission10', id: 10 }
      ]
    }
  },
  props: {

  },
  components: {
    kanban
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

</style>
