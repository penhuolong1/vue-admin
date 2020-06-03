<template>
    <li class="todo-wrapper" @dblclick="showEditInput" :class="{complate: item.done}">
      <div class="todo-wrapper-left">
        <input type="checkbox" :checked="item.done" @change="toggleTodo">
        <span>{{item.text}}</span>
      </div>
      <div class="todo-wrapper-right">
        <i class="el-icon-close" @click="delTodo"></i>
      </div>
      <el-input
      v-model="input"
      v-show="showEdit"
      class="edit-input"
      placeholder="请输入内容"
      @blur="editTodo"
      ref="inputRef"
      @keyup.enter.native="editTodo"></el-input>
    </li>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      showEdit: false
    }
  },
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  components: {

  },
  created () {
    this.input = this.item.text
  },
  mounted () {

  },
  methods: {
    toggleTodo () {
      this.$emit('toggleTodo', this.index)
    },
    delTodo () {
      this.$emit('delTodo', this.index)
    },
    closeEdit () {
      this.showEdit = false
    },
    showEditInput () {
      this.showEdit = true
      let that = this
      setTimeout(function () {
        that.$refs.inputRef.$el.children[0].focus() // 使input框获得焦点
      }, 100)
    },
    editTodo () {
      if (!this.input) {
        this.$message({
          showClose: true,
          message: '请输入内容',
          type: 'error'
        })
        return
      }
      let params = {
        input: this.input,
        index: this.index
      }
      this.$emit('editTodo', params)
      this.showEdit = false
    }
  }
}
</script>

<style scoped lang="scss">
.todo-wrapper {
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ededed;
  position: relative;
  .edit-input {
    position: absolute;
  }
  &.complate {
    .todo-wrapper-left {
      & > span {
        color: #d9d9d9;
        text-decoration: line-through;
      }
    }
  }
  .todo-wrapper-left {
    position: relative;
    input[type="checkbox"] {
      position: absolute;
      cursor: pointer;
      width: 40px;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 1;
      opacity: 0;
    }
    input[type="checkbox"]+span {
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    }
    input[type="checkbox"]:checked+span {
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
    }
    &>span {
      display: inline-block;
      height: 100%;
      font-weight: bolder;
      color: #4d4d4d;
      font-size: 14px;
      padding-left: 45px;
      background-repeat: no-repeat;
      background-position: left;
      transition: color 0.4s;
    }
  }
  .todo-wrapper-right {
    i {
      display: none;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
      font-weight: bolder;
      color: #cc9a9a;
      cursor: pointer;
      &:hover {
        color: #af5b5e;
      }
    }
  }
  &:hover {
    .todo-wrapper-right {
      i {
         display: block;
      }
    }
  }
}
</style>
