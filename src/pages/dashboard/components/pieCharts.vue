<template>
  <div class="pie-charts"></div>
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
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '48%'],
            data: [
              { value: 320, name: 'Industries' },
              { value: 240, name: 'Technology' },
              { value: 149, name: 'Forex' },
              { value: 100, name: 'Gold' },
              { value: 59, name: 'Forecasts' }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
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
.pie-charts {
  background-color: #fff;
  height: 400px;
  width: 100%;
  margin-bottom: 20px;
}
</style>
