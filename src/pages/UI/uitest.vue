<script setup>
import { ref} from 'vue';
import { NGrid, NGi, NDivider,NTable, NTd,NTr,} from 'naive-ui'
import EchartsGaugeVue from '../../components/echartsModel/EchartsGauge.vue';
import PageHeader from "../../components/pageHeader.vue";
import EchartsPie from "../../components/echartsModel/EchartsPie.vue";
const passcase = ref(400)
const failcase = ref(600)
const passed = ref(0.6)
</script>
<template>
    <!-- <echarts-pie-vue :passcase='passcase' :failcase='failcase'></echarts-pie-vue> -->
    <!-- <echarts-line></echarts-line> -->
    <div class="anim-left" style="padding: 0 40px 0 40px;">
        <div class="pageheader">
            <page-header></page-header>
        </div>
            <n-divider></n-divider>
            <router-view style="text-align: center;"></router-view>
            <n-grid x-gap="12" :cols="5">
                <n-gi :span="2">
                  <echarts-pie :passcase="passcase" :failcase="failcase"></echarts-pie>
                    <echarts-gauge-vue :passed="passed"></echarts-gauge-vue>
                </n-gi>
                <n-gi :span="3" class="anim-up-delay" style="transform: translateY(100%);">
                    <n-table style="text-align: center;" striped>
                        <thead>
                            <n-tr style="font-weight: bold;">
                                <n-td>测试系统</n-td>
                                <n-td>测试用例</n-td>
                                <n-td>运行结果</n-td>
                                <n-td>用例执行时间</n-td>
                            </n-tr>
                        </thead>
                        <tbody>
                            <n-tr>
                                <n-td>1</n-td>
                                <n-td>2</n-td>
                                <n-td>3</n-td>
                                <n-td>4</n-td>
                            </n-tr>
                        </tbody>
                    </n-table>  
                </n-gi>
            </n-grid>
    </div>
</template>
<style scoped>
@import '../../static/animation.css';
:deep(.n-gi,.n-grid){
  margin: auto;
}
.pageheader {
    text-align: center;
    width: 100%;
}
</style>