<script setup>
import {NPageHeader, NGi, NGrid, NStatistic, NButton,} from 'naive-ui'
import {useRouter} from 'vue-router'

const $router = useRouter()
const gocaseupload = () => {
  $router.push({
    name: 'caseupload',
  })
}
const gocaseCheck = () => {
  $router.push({
    name: 'caseCheck',
  })
}
const gocaseEdit = ()=>{
  $router.push({
    name:'caseEdit',
  })
}
</script>
<template>
  <n-page-header subtitle="说的好像有人会去用似的……">
    <n-grid :cols="5">
      <n-gi class="anim-scale">
        <n-statistic label="用户数" value="0"/>
      </n-gi>
      <n-gi class="anim-scale">
        <n-statistic label="用例数" value="0"/>
      </n-gi>
      <n-gi class="anim-scale">
        <n-statistic label="被大佬吐槽次数" value="10000 次"/>
      </n-gi>
      <n-gi class="anim-scale">
        <n-statistic label="今日修复bug数" value="0 个"/>
      </n-gi>
      <n-gi class="anim-scale">
        <n-statistic label="剩余bug数" value="数不清"/>
      </n-gi>
    </n-grid>
    <template #extra>
      <n-button @click="gocaseupload" type="success" secondary strong round>上传用例</n-button>
      <n-button @click="gocaseEdit" type="success" secondary strong round>在线编辑</n-button>
      <n-button @click="gocaseCheck" type="success" secondary strong round>已有用例</n-button>
    </template>
  </n-page-header>
</template>
<style scoped>
@import '../static/animation.css';
</style>