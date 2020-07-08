<template>
  <div>
    <aside>动态table</aside>
    <div>不固定表头, 不按照表头顺序排序</div>
    <FixedThead/>
    <div style="margin-top: 10px;">固定表头,按照表头顺序排序</div>
    <UnfixedThead/>
  </div>
</template>

<script>
import FixedThead from './components/FixedThead'
import UnfixedThead from './components/FixedThead'
export default {
  components: {
    FixedThead,
    UnfixedThead
  },
  props: {

  },
  data() {
    return {

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
