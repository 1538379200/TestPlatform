<template>
  <n-alert closable type="info" title="炒鸡温柔的提示" v-if="tipShow" show-icon :on-after-leave="tipOut">你以为刷新界面我就会重新运行？
  </n-alert>
  <div>
    <h2>{{ $route.params.caseFile }}</h2>
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
        {{persentNum}}%
      </n-tag>
    </n-progress>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import {NAlert,NProgress,NTag} from 'naive-ui'

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
</script>

<style scoped>

</style>
