<template>
  <div class="todo-list-wrapper">

  </div>
</template>

<script>
import {todoList} from '@/api/dashboard'
export default {
  data () {
    return {

    }
  },
  props: {

  },
  components: {

  },
  created () {
    this.getTodoList()
  },
  mounted () {

  },
  methods: {
    getTodoList () {
      todoList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
