<template>
    <n-space inline>
      <n-grid x-gap="12" cols="7" class="anim-left Giboard">
        <n-gi :span="1">
          <n-input-group>
            <n-input-group-label style="width: 50%">用例编号</n-input-group-label>
            <n-input-number v-model:value="EcaseID" disabled></n-input-number>
          </n-input-group>
        </n-gi>
        <n-gi :span="2">
          <n-input-group>
            <n-select v-model:value="EcaseType" :options="option" placeholder="请选择类型" style="width: 30%"></n-select>
            <n-input v-model:value="EcaseTypeValue" placeholder="请输入操作类型值"></n-input>
          </n-input-group>
        </n-gi>
        <n-gi :span="2">
          <n-input placeholder="请填写要输入的数据" v-model:value="EcaseData" :disabled="inputDisable"></n-input>
        </n-gi>
        <n-gi :span="1">
          <n-input placeholder="可以输入功能模块" v-model:value="EcaseModel"></n-input>
        </n-gi>
        <n-gi :span="1">
          <n-button type="primary" @click="addCase">确认添加用例</n-button>
        </n-gi>
        </n-grid>
      <NDivider></NDivider>
      <n-table striped bordered v-if="tableShow" class="anim-left">
        <thead>
          <tr>
            <td>用例编号</td>
            <td>操作类型</td>
            <td>操作数据</td>
            <td>测试模块</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableValue" class="anim-left">
            <td>{{item[0]}}</td>
            <td>{{item[1]}}</td>
            <td>name={{item[1]}};value={{item[2]}};txt={{item[3]}}</td>
            <td>{{item[4]}}</td>
          </tr>
        </tbody>
      </n-table>
    </n-space>
</template>

<script setup>
import {NInputGroup,NInput,NInputGroupLabel,NInputNumber,NSelect,NSpace,NGrid,NGi,NButton,NDivider,NTable} from 'naive-ui'
import {ref, watch, watchEffect} from "vue";
//定义用例的输入数据
const EcaseID = ref(1)
const EcaseType = ref(null)
const EcaseTypeValue = ref(null)
const EcaseData = ref(null)
const EcaseModel = ref(null)
//设置只有操作类型为input时才可以输入数据，使用watch监听操作类型变化
const inputDisable = ref(true)
watch((EcaseType),()=>{
  inputDisable.value = EcaseType.value !== 'input'
})
//定义select选择器的值
const option = [
  {
    label:'open-打开网页',
    value:'open',
  },
  {
    label: 'click-点击元素',
    value:'click',
  },
  {
    label: 'input-向元素输入数据',
    value: 'input',
  },
]
//定义表格数据，用列表添加
const tableValue = ref([])
console.log(tableValue.value.length)
//添加用例按钮绑定事件，点击按钮将数据添加到表格数据列表
const addCase = ()=>{
  if (EcaseType.value===null || EcaseTypeValue.value === null){
    alert('请输入数据后再添加哦')
  }else {
    tableValue.value.push([EcaseID,EcaseType,EcaseTypeValue,EcaseData,EcaseModel])
    console.log(tableValue.value)
  }
}
//当没有数据时不显示表格
const tableShow = ref(false)
watchEffect(()=>{
  const a = tableValue.value
  console.log(a.length)
  tableShow.value = a.length > 0
})
</script>

<style scoped>
@import "../../static/animation.css";

:deep(.Giboard){
  text-align: center;
}
</style>