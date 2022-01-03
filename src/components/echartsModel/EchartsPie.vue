<script setup>
import { onMounted, ref} from 'vue';
import * as echarts from 'echarts'
const passcase = ref(null)
const failcase = ref(null)
// const props = defineProps(['passcase','failcase'])
const props = defineProps({
    passcase:{
        type:Number,
        default:100,
    },
    failcase:{
        type:Number,
        default:300,
    }
})
onMounted(()=>{
    var piecharts = echarts.init(document.getElementById('pageCharts'));
    var option = {
        title: {
            text: '这是你的用例',
            subtext: '',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {   color:['#ee6666','#91cc75'],
                name: '用例数据',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: props.failcase, name: '失败用例' },
                    { value: props.passcase, name: '通过用例'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            }
        ]
    };
    piecharts.setOption(option);
})
</script>

<template>
    <div id="pageCharts" style="width: 31.25rem;height: 31.25rem"></div>
</template>