<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
onMounted(() => {
    const echartsgauge = echarts.init(document.getElementById('echartsgauge'));
    const option = {
        title:{
            text:'这也是你的用例',
            left:'center'
        },
        series: [
            {
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                min: 0,
                max: 1,
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        width: 6,
                        color: [
                            [0.25, '#FF6E76'],
                            [0.5, '#FDDD60'],
                            [0.75, '#58D9F9'],
                            [1, '#7CFFB2']
                        ]
                    }
                },
                pointer: {
                    icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    length: '12%',
                    width: 20,
                    offsetCenter: [0, '-60%'],
                    itemStyle: {
                        color: 'inherit'
                    }
                },
                axisTick: {
                    length: 12,
                    lineStyle: {
                        color: 'inherit',
                        width: 2
                    }
                },
                splitLine: {
                    length: 20,
                    lineStyle: {
                        color: 'inherit',
                        width: 5
                    }
                },
                axisLabel: {
                    color: '#464646',
                    fontSize: 20,
                    distance: -60,
                    formatter: function (value) {
                        if (value === 0.875) {
                            return 'A';
                        } else if (value === 0.625) {
                            return 'B';
                        } else if (value === 0.375) {
                            return 'C';
                        } else if (value === 0.125) {
                            return 'D';
                        }
                        return '';
                    }
                },
                title: {
                    offsetCenter: [0, '-20%'],
                    fontSize: 30
                },
                detail: {
                    fontSize: 50,
                    offsetCenter: [0, '0%'],
                    valueAnimation: true,
                    formatter: function (value) {
                        return Math.round(value * 100) + '分';
                    },
                    color: 'inherit'
                },
                data: [
                    {
                        value: 0.8,
                        name: '用例及格率'
                    }
                ]
            }
        ]
    };
    echartsgauge.setOption(option)
})
</script>
<template>
    <div id="echartsgauge" style="width: 500px;height: 500px;"></div>
</template>
<style scoped>
</style>