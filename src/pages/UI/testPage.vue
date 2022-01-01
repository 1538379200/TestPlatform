<template>
  <n-alert closable type="info" title="炒鸡温柔的提示" v-if="tipShow" show-icon>你以为刷新界面我就会重新运行？
  </n-alert>
  <div>
    <!--    <h2>{{ $route.params.caseFile }}</h2>-->
    <transition name="anim-inout" :appear="true">
      <n-progress
          v-if="runStatus"
          type="line"
          status="error"
          :percentage="persentNum"
          :height="24"
          border-radius="12px 12px 0 0"
          fill-border-radius="12px 0 12px 12px"
      >
        用例执行-
        <n-tag type="success" round>
          {{ persentNum }}%
        </n-tag>
      </n-progress>
      <n-grid x-gap="12" cols="2" v-else style="align-items: center;justify-items: center">
        <n-gi :span="1">
          <EchartsPie :passcase="Passcase" :failcase="Failcase"></EchartsPie>
        </n-gi>
        <n-gi :span="1">
          <EchartsGaugeSpeed :persent-num="passPersent"></EchartsGaugeSpeed>
        </n-gi>
      </n-grid>
    </transition>
    <n-divider/>
    <n-grid x-gap="12" :cols="2" style="padding-top: 1rem;padding-right: 2rem;padding-left: 2rem">
      <n-gi :span="1">
        <n-steps size="medium" vertical v-for="(item,index) in stepValues" :key="index">
          <n-step :title=item.title :description=item.description :status=item.stepStatus></n-step>
          <div v-if="index < (stepValues.length)-1"></div>
          <template #error-icon>
            <n-icon @click="showStep(item)">
              <sad-cry></sad-cry>
            </n-icon>
          </template>
        </n-steps>
      </n-gi>
      <n-gi :span="1" style="padding-right: 2rem">
        <data-table-model></data-table-model>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import {NAlert, NProgress, NTag, NSteps, NStep, NGrid, NGi, NIcon, NDivider} from 'naive-ui'
import {SadCry} from '@vicons/fa'
import EchartsPie from '../../components/echartsModel/EchartsPie.vue'
import EchartsGaugeSpeed from '../../components/echartsModel/EchartsGaugeSpeed.vue'
import DataTableModel from "../../components/dataTableModel.vue"


const $route = useRoute()

//判断是否有caseFile的文件，没有则不去执行代码
//关闭弹窗提示后直接跳回页面
const tipShow = ref(false)
if ($route.params.caseFile) {
  console.log($route.params.caseFile)
} else {
  tipShow.value = true
}

//设置进度条百分比
//标签文字也使用了此百分比进行显示
const persentNum = ref(50)

//设置自动添加执行步骤
//步骤的stepStatus会自动给出显示状态
const stepValues = [
  {title: '第一个', description: '第一个介绍(这里显示运行的日志)', stepStatus: 'finish'},
  {title: '第二个', description: '第二个介绍', stepStatus: 'error'},
  {title: '第三个', description: '第三个介绍', stepStatus: 'error'},
]

//定义错误图标点击事件，弹出报错信息
const showStep = (item) => {
  console.log(item.description)
}

//runStatus为true显示进度条，为false显示echarts图表
//定义Passcase、Failcase的饼图数据
//定义passPersent的仪表盘图表数据
const Passcase = ref(100)
const Failcase = ref(50)
const passPersent = ref(60)
const runStatus = ref(false)


</script>

<style scoped>
@import "../../static/animation.css";

</style>
