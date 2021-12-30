<template>
  <n-alert closable type="info" title="炒鸡温柔的提示" v-if="tipShow" show-icon :on-after-leave="tipOut">你以为刷新界面我就会重新运行？
  </n-alert>
  <div>
<!--    <h2>{{ $route.params.caseFile }}</h2>-->
    <n-progress
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
    <n-grid x-gap="12" :cols="2" style="padding: 5rem 2rem 0 2rem">
      <n-gi :span="1">
        <n-steps size="medium" vertical v-for="(item,index) in stepValues" :key="index">
          <n-step :title=item.title :description=item.description :status=item.stepStatus @click="showModal = true"></n-step>
          <template #error-icon>
            <n-icon>
              <sad-cry></sad-cry>
            </n-icon>
          </template>
        </n-steps>
      </n-gi>
      <n-gi :span="1">
        <div>占位</div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import {NAlert, NProgress, NTag, NSteps, NStep, NGrid, NGi,NIcon,NModal,NPopover} from 'naive-ui'
import {SadCry} from '@vicons/fa'

const $route = useRoute()

//判断是否有caseFile的文件，没有则不去执行代码
const tipShow = ref(false)
const tipOut = () => {
  window.history.back()
}
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

//定义错误类型可以弹窗显示错误日志
const showModal = ref(false)
</script>

<style scoped>

</style>
