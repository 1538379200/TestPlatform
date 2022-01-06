<template>
  <n-space >
    <n-layout position="absolute" has-sider>
      <n-layout-sider content-style="padding:2rem" bordered :native-scrollbar="false">
        <asideContent></asideContent>
      </n-layout-sider>
      <n-layout content-style="padding:2rem" :native-scrollbar="false">
        <test-content/>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import {NLayout,NLayoutSider,NSpace} from 'naive-ui'
import AsideContent from '../components/indexContent/asideContent.vue'
import TestContent from '../components/indexContent/testContent.vue'

</script>

<style scoped>
:deep(.n-layout){
  width: 100%;
  height: 100%;
}
:deep(.n-layout-sider){
  height: 100%;
}
</style>
<style>
.n-scrollbar-content,.n-scrollbar-container,.n-layout{
  height: 100%;
  width: 100%;
}
</style>