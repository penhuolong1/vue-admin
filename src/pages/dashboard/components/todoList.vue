<template>
  <div class="todo-list-wrapper">
    <div class="title">
      <div class="icon">
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="input">
        <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="addTodo"></el-input>
      </div>
    </div>
    <ul>
      <todo v-for="(item, index) in filterTodoList"
      :key="index"
      :index="index"
      :item="item"
      @toggleTodo="toggleTodo"
      @delTodo="delTodo"
      @editTodo="editTodo"/>
    </ul>
    <footer>
      <label>{{todoLength}} item left</label>
      <ul>
        <li v-for="(val, key) in filters"
        :class="{active: key === visibility}"
        :key="key"
        @click="visibility = key">{{key}}</li>
      </ul>
    </footer>
  </div>
</template>

<script>
import {todoList} from '@/api/dashboard'
import todo from './todo'
const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
export default {
  data () {
    return {
      input: 'Todo List',
      todoListData: [],
      visibility: 'all',
      filters
    }
  },
  props: {

  },
  components: {
    todo
  },
  created () {
    this.getTodoList()
  },
  mounted () {

  },
  computed: {
    filterTodoList () {
      return filters[this.visibility](this.todoListData)
    },
    todoLength () {
      return this.todoListData.filter(todo => !todo.done).length
    }
  },
  methods: {
    getTodoList () {
      todoList().then(res => {
        console.log(res)
        if (res.data.code === 200) {
          this.todoListData = res.data.data
        }
      })
    },
    toggleTodo (index) {
      this.todoListData[index].done = !this.todoListData[index].done
    },
    delTodo (index) {
      this.todoListData.splice(index, 1)
    },
    addTodo () {
      console.log(this.input)
      if (!this.input) {
        this.$message({
          showClose: true,
          message: '请输入内容',
          type: 'error'
        })
        return
      }
      this.todoListData.push({
        'text': this.input,
        'done': false
      })
    },
    // 编辑文件
    editTodo (params) {
      this.todoListData[params.index].text = params.input
    }
  }
}
</script>

<style scoped lang="scss">
.todo-list-wrapper {
  background-color: #fff;
  &>.title {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ededed;
    .icon {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-weight: bolder;
      }
    }
    .input {
      flex: 1;
      /deep/ .el-input__inner {
        border: none;
        padding-left: 0px;
      }
    }
  }
  footer {
    position: relative;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: #777;
    font-size: 14px;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 40px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
    ul {
      position: absolute;
      z-index: 10;
      right: 10px;
      li {
        float: left;
        padding: 2px 5px;
        cursor: pointer;
        &.active {
          border: 1px solid rgba(175,47,47,.2);
          border-radius: 3px;
        }
      }
    }
  }
}
</style>
