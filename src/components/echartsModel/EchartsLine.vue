<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue';

onMounted(() => {
    const linecharts = echarts.init(document.getElementById("echartsline"));
    const option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['登录功能', '添加购物车', '删除购物车', '支付订单', '退出登录']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['0', '1s', '2s', '3s', '4s', '5s', '6s']
        },
        yAxis: {
            // type: ''
        },
        series: [
            {
                name: '登录功能',
                type: 'line',
                stack: 'Total',
                data: [0, 2,1, 2, 0.5, 5, 4, 6]
            },
            {
                name: '添加购物车',
                type: 'line',
                stack: 'Total',
                data: [0, 2, 4, 6, 2, 10, 5]
            },
            {
                name: '删除购物车',
                type: 'line',
                stack: 'Total',
                data: [0, 5, 2, 5.6, 4, 4, 2]
            },
            {
                name: '支付订单',
                type: 'line',
                stack: 'Total',
                data: [0.5, 1, 3, 2, 4, 5, 6]
            },
            {
                name: '退出登录',
                type: 'line',
                stack: 'Total',
                data: [0.7, 5, 2, 5, 2, 3, 5]
            }
        ]
    };
    linecharts.setOption(option);
})
</script>
<template>
    <div id="echartsline" style="width: 800px; height: 600px;"></div>
</template>