<template>
    <n-collapse>
      <n-collapse-item title="功能测试相关" name="1">
        <n-button @click="scrollP('#介绍')" block round strong type="primary" secondary class="btnStyle">功能测试介绍</n-button>
        <n-button @click="scrollP('#分类')" block round strong type="primary" secondary class="btnStyle">功能测试分类</n-button>
        <n-button @click="scrollP('#用例')" block round strong type="primary" secondary class="btnStyle">测试用例编写</n-button>
        <n-button @click="scrollP('#用例要素')" block round strong type="primary" secondary class="btnStyle">编写用例要素</n-button>
        <n-button @click="scrollP('#bug要素')" block round strong type="primary" secondary class="btnStyle">测试用例BUG要素</n-button>
      </n-collapse-item>
      <n-collapse-item title="性能测试相关" name="2">
        <n-button @click="scrollP('#基础')" block round strong type="primary" secondary class="btnStyle">性能测试基础</n-button>
        <n-button @click="scrollP('#指标')" block round strong type="primary" secondary class="btnStyle">性能测试常见指标</n-button>
        <n-button @click="scrollP('#系统指标')" block round strong type="primary" secondary class="btnStyle">系统性能指标</n-button>
        <n-button @click="scrollP('#资源性能')" block round strong type="primary" secondary class="btnStyle">资源性能指标</n-button>
        <n-button @click="scrollP('#中间件')" block round strong type="primary" secondary class="btnStyle">中间件常见指标</n-button>
        <n-button @click="scrollP('#数据库')" block round strong type="primary" secondary class="btnStyle">数据库常见指标</n-button>
        <n-button @click="scrollP('#扩展指标')" block round strong type="primary" secondary class="btnStyle">可扩展指标</n-button>
        <n-button @click="scrollP('#可靠性指标')" block round strong type="primary" secondary class="btnStyle">可靠性指标</n-button>
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
:deep(.btnStyle){
  margin: 3px 0 3px 0 ;
}
</style>