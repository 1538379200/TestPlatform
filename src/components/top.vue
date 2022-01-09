<script setup>
import {NGrid, NGi, NMenu, NDropdown, NButton} from 'naive-ui'
import {h, ref} from 'vue';
import {RouterLink} from 'vue-router'
import {Accessibility16Filled} from '@vicons/fluent'
import {CloudDownloadSharp} from '@vicons/ionicons5'
import {Icon} from '@vicons/utils';

const homepage = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/'
              }
            },
            {default: () => '自己不测试给别人测试平台'}
        ),
    key: 'home'
  },
]
const uitest = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/uitest'
              }
            },
            {default: () => '功能测试'}
        ),
    key: 'uitest'
  },
]

const posttest = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/porttest'
              }
            },
            {default: () => '接口测试'}
        ),
    key: 'posttest'
  },
]

const activeKey = ref(null)

const defaultExpandedKeys = ['personal']
const showDropdownRef = ref(false)
const showDropdown = showDropdownRef
const handleClick = () => {
  showDropdownRef.value = !showDropdownRef.value
}

const options = [
  // {
  //   label: '我的用例',
  //   key: 'mycase',
  // },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'mycases'
              }
            },
            {default: () => '我的用例'}
        ),
    key: 'mytestcase'
  },
  {
    label: '我的报告',
    key: 'myreport',
  },
  {
    label: '退出登录',
    key: 'logout',
  }
]
</script>
<template>
  <n-grid x-gap="12" :cols="12">
    <n-gi class="light-green" :span="2">
      <n-menu :options="homepage" mode="horizontal" v-model:value="activeKey"></n-menu>
      <!-- <menu-model-vue :toUrl='/' :muneName='自动化测试平台' :menuKey='home'></menu-model-vue> -->
    </n-gi>
    <n-gi class="green anim-scale" :span="1" style="text-align: center;">
      <n-menu :options="uitest" mode="horizontal" v-model:value="activeKey"></n-menu>
    </n-gi>
    <n-gi class="green anim-scale" :span="1" style="text-align: center;">
      <n-menu :options="posttest" mode="horizontal" v-model:value="activeKey"></n-menu>
    </n-gi>
    <n-gi :offset="3" :span="2" class="light-green">
      <n-button type="primary" size="medium">
        <Icon>
          <CloudDownloadSharp></CloudDownloadSharp>
        </Icon>
        下载测试模版
      </n-button>
    </n-gi>
    <n-gi :offset="2" :span="1" class="light-green anim-scale" style="text-align: center;">
      <n-dropdown trigger="click" :options="options">
        <n-button dashed type="primary" size="small" @click="handleClick">
          <Icon size="20px">
            <Accessibility16Filled/>
          </Icon>
          个人中心
        </n-button>
      </n-dropdown>
    </n-gi>
  </n-grid>
</template>

<style scoped>
/* .light-green {
    background-color: rgba(0, 128, 0, 0.12);
} */
/* .green {
    background-color: rgba(0, 128, 0, 0.24);
} */
@import '../static/animation.css';

div {
  height: 100%;
}

</style>