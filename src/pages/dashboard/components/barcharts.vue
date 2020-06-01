<template>
  <div class="bar-charts"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    initCharts () {
      var myChart = echarts.init(this.$el, 'macarons')
      // 绘制图表
      myChart.setOption({
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [
          {
            name: 'pageA',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [79, 52, 200, 334, 390, 330, 220]
          }, {
            name: 'pageB',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [80, 52, 200, 334, 390, 330, 220]
          }, {
            name: 'pageC',
            type: 'bar',
            stack: 'vistors',
            barWidth: '60%',
            data: [30, 52, 200, 334, 390, 330, 220]
          }
        ]
      })
    }
  },
  created () {},
  mounted () {
    this.initCharts()
  }
}
</script>
<style lang="scss" scoped>
.bar-charts {
  height: 400px;
  width: 100%;
  background-color: #fff;
}
</style>
