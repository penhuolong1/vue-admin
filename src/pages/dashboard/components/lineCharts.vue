<template>
  <div class="line-charts"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  components: {},
  props: {},
  data () {
    return {
      newVisitis: {
        expectedData: [100, 120, 161, 134, 105, 160, 165],
        actualData: [120, 82, 91, 154, 162, 140, 145]
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    initCharts () {
      var myChart = echarts.init(this.$el, 'macarons')
      // 绘制图表
      myChart.setOption({
        title: {
          text: '',
          show: false
        },
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        legend: {
          data: ['expected', 'actual']
        },
        grid: {
          left: 20,
          right: 20,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        series: [{
          name: 'expected',
          itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: this.newVisitis.expectedData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: 'actual',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: this.newVisitis.actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    }
  },
  created () {
  },
  mounted () {
    this.initCharts()
  }
}
</script>
<style lang="scss" scoped>
.line-charts {
  height: 400px;
  width: 100%;
  background-color: #fff;
  padding-top: 30px;
}
</style>
