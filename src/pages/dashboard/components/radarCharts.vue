<template>
  <div class="radar-chatrs"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
const animationDuration = 3000
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
          data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: 'Sales', max: 10000 },
            { name: 'Administration', max: 20000 },
            { name: 'Information Technology', max: 20000 },
            { name: 'Customer Support', max: 20000 },
            { name: 'Development', max: 20000 },
            { name: 'Marketing', max: 20000 }
          ]
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: 'Allocated Budget'
            },
            {
              value: [4000, 9000, 15000, 15000, 13000, 11000],
              name: 'Expected Spending'
            },
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: 'Actual Spending'
            }
          ],
          animationDuration: animationDuration
        }]
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
.radar-chatrs {
  width: 100%;
  height: 400px;
  background-color: #fff;
  margin-bottom: 20px;
}
</style>
