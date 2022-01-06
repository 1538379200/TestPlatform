<template>
    <n-collapse>
      <n-collapse-item title="功能测试相关" name="1">
        <n-button @click="scrollP('#performance')" block round strong type="primary" secondary>功能测试介绍</n-button>
        <n-button @click="scrollP('#performance')" block round>功能测试介绍</n-button>
        <n-button @click="scrollP('#performance')" block>功能测试介绍</n-button>
        <n-button @click="scrollP('#performance')" text>功能测试介绍</n-button>
        <n-button @click="scrollP('#performance')" text>功能测试介绍</n-button>
      </n-collapse-item>
      <n-collapse-item title="性能测试相关" name="2">
      </n-collapse-item>
    </n-collapse>
</template>

<script setup>
import {NCollapse,NCollapseItem,NButton} from 'naive-ui'

//自定义锚点跳转方法
//bahavior定义平滑滚动
const scrollP = (el)=>{
  document.querySelector(el).scrollIntoView({behavior:'smooth'})
}
</script>

<style scoped>

</style>