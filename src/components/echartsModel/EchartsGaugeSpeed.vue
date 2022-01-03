<template>
  <div id="echartsguageSpeed" style="width: 31.25rem;height: 31.25rem"></div>
</template>

<script setup>
import {onMounted} from 'vue'
import * as echarts from 'echarts'
const props = defineProps({
  persentNum:{
    type:Number,
    default:100
  }
})
onMounted(()=>{
  const echartsgauge = echarts.init(document.getElementById('echartsguageSpeed'))
  const option = {
    title:{
      text:'这也是你的用例',
      left:'center',
    },
    series: [
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 18
        },
        axisLine: {
          lineStyle: {
            width: 18
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        axisLabel: {
          distance: 25,
          color: '#999',
          fontSize: 25
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 10
          }
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          fontSize: 50,
          offsetCenter: [0, '70%']
        },
        data: [
          {
            value: props.persentNum
          }
        ]
      }
    ]
  };
  echartsgauge.setOption(option)
})
</script>

<style scoped>

</style>