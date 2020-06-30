<template>
  <div class="chart-container">
    <keyboard height="100%" width="100%" ></keyboard>
  </div>
</template>

<script>
import keyboard from '@/components/charts/keyboard'
export default {
  data () {
    return {
    }
  },
  props: {

  },
  components: {
    keyboard
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
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
