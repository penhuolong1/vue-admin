<template>
  <div class="content-wrapper">
    <aside>
      通过sync来实现父子组件的数据同步
    </aside>
    <child :inputValue.sync="value"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      value: '父组件传来的数据'
    }
  },
  props: {

  },
  components: {
    child
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
