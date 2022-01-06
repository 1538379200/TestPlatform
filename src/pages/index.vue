<template>
  <n-space >
    <n-layout position="absolute" has-sider>
      <n-layout-sider content-style="padding:2rem" bordered :native-scrollbar="false">
        <asideContent></asideContent>
      </n-layout-sider>
      <n-layout content-style="padding:2rem" :native-scrollbar="false">
        <n-h1 id="function">
          <Icon size="30" color="#18A058">
            <ClipboardTextLtr20Filled/>
          </Icon>
          这是标题
        </n-h1>
        <n-hr></n-hr>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2><n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <div id="performance">
        <n-h1>这是标题</n-h1>
        <n-hr></n-hr>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2><n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        <n-h2>这是内容</n-h2>
        </div>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup>
import {NLayout,NLayoutSider,NSpace,NH1,NH2,NHr} from 'naive-ui'
import asideContent from '../components/indexContent/asideContent.vue'
import {ClipboardTextLtr20Filled} from '@vicons/fluent'
import {Icon} from '@vicons/utils'

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