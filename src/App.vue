<script setup>
import {
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NScrollbar,
  NDivider,
  NMessageProvider
} from 'naive-ui'
import top from './components/top.vue'
import {Accessibility16Filled} from '@vicons/fluent'
import {Icon} from '@vicons/utils'
import {computed, ref} from 'vue'
</script>


<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <top></top>
      </n-layout-header>
      <n-divider/>
      <n-scrollbar>
        <n-message-provider>
          <n-layout-content content-style="padding: 24px;">
            <router-view></router-view>
          </n-layout-content>
        </n-message-provider>
      </n-scrollbar>
      <n-layout-footer></n-layout-footer>
    </n-layout>
  </n-space>
</template>


<style>
html,
body,
#app,
.n-space,
.n-space > div {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.n-layout-header,
.n-layout-footer {
  flex: 0 0 auto;
}

.n-space > div {
  display: flex;
  flex-direction: column;
}

.n-space > div > div {
  display: flex;
  flex-direction: column;
}

.n-layout-scroll-container {
  display: flex;
  flex-direction: column;
}

.n-layout-content {
  flex: 1 0 auto;
}

.n-layout-header {
  padding: 10px 10px 0px 10px;
  background-color: rgba(255, 255, 255, 0.466);
  box-shadow: 0 0 5px 0 gray;
}

.n-layout-footer {
  padding: 0 10px 10px 10px;
}
</style>
