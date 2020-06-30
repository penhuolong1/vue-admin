<template>
  <div class="kanban-wrapper">
    <h1>{{title}}</h1>
    <draggable :list="list" :group="group" class="drag-kanban">
      <div v-for="(item, index) in list" :key="index" class="kanban-item">
        {{item.name}}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    group: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    list () {
      this.$emit('update:list', this.list)
    }
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
.kanban-wrapper {
  width: 100%;
  h1 {
    background-color: #4a9ff9;
    line-height: 50px;
    text-align: center;
    color: #fff;
  }
  .drag-kanban {
    background-color: #f0f0f0;
    min-height: 80px;
    width: 100%;
    padding: 10px;
    .kanban-item {
      background-color: #fff;
      line-height: 60px;
      padding-left: 10px;
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);
      margin-top: 10px;
      cursor: pointer;
      &:first-child {
        margin-top: 0px;
      }
    }
  }
}
</style>
