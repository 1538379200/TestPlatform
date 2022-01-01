<template>
<n-data-table ref="table" :data="tableData" :columns="tableCol" :row-class-name="failColor">
</n-data-table>
</template>

<script setup>
import {NDataTable} from 'naive-ui'
import {onMounted,ref} from "vue";
const table = ref(null)
onMounted(()=>{})
const tableCol = [
  {
    title:'用例编号',
    key: 'caseID',
  },
  {
    title: '用例名称',
    key:'caseName',
  },
  {
    title: '运行结果',
    key:'caseStatus',
    defaultFilterOptionValues:['PASSED','FAILED'],
    filterOptions:[
      {
        label:'成功',
        value:'PASSED',
      },
      {
        label: '失败',
        value: 'FAILED'
      },
    ],
    filter (value, row) {
      return ~row.caseStatus.indexOf(value)
    }
  },
  {
    title: '运行时间',
    key:'runTime',
  },
]
const failColor = (row)=>{
  if (row.caseStatus === 'FAILED'){
    return 'failColors'
  }else {
    return null
  }
}
const tableData = [
  {
    caseID:1,
    caseName:'点击按钮',
    caseStatus: 'PASSED',
    runTime:'20s',
  },
  {
    caseID:2,
    caseName:'输入信息',
    caseStatus: 'FAILED',
    runTime:'20s',
  }
]
// const tablePage = {pageSize: 10}
</script>

<style scoped>
:deep(.failColors td){
  color: red;
}
</style>