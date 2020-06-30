<template>
  <div class="content-wrapper">
    <aside>可拖拽的列表基于Vue.Draggable</aside>
    <el-row class="drag-list-wrapper" :gutter="12">
      <el-col :span="12">
        <draggable group="article" style="minHeight:30px;" :list="list1">
          <div class="drag-list-item" v-for="(item, index) in list1" :key="index">{{item.name}}</div>
        </draggable>
        <p v-for="(item,index) in list1" :key="index">{{item.name}}</p>
      </el-col>
      <el-col :span="12">
        <draggable group="article" style="minHeight:30px;" :list="list2">
          <div class="drag-list-item" v-for="(item, index) in list2" :key="index">{{item.name}}</div>
        </draggable>
        <p v-for="(item,index) in list2" :key="index">{{item.name}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  data () {
    return {
      list1: [
        { name: 'John1', id: 1 },
        { name: 'Joao1', id: 2 },
        { name: 'Jean1', id: 3 },
        { name: 'Gerard1', id: 4 }
      ],
      list2: [
        { name: 'John2', id: 1 },
        { name: 'Joao2', id: 2 },
        { name: 'Jean2', id: 3 },
        { name: 'Gerard2', id: 4 }
      ]
    }
  },
  props: {

  },
  components: {
    draggable
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
.drag-list-item {
  line-height: 1.2;
  border: 1px solid #1f2d3d;
  margin-top: 5px;
  padding-left: 5px;
  cursor: pointer;
}
.drag-list-wrapper {
  /deep/ .sortable-chosen {
    color: #fff!important;
    background: #42b983!important;
  }
}
</style>
