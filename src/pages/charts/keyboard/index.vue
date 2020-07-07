<template>
  <div class="chart-container">
    <keyboard height="100%" width="100%" />
  </div>
</template>

<script>
import keyboard from '@/components/charts/keyboard'
export default {
  components: {
    keyboard
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
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
