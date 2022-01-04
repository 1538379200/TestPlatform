<template>
  <transition name="anim-inout">
    <n-alert title="来自写bug的程序员提示" type="error" v-if="alertShow" @click="closeAlert">
      <h4>
        <Icon size="20">
          <SadCryRegular></SadCryRegular>
        </Icon>
        {{ alertMes }}
      </h4>
    </n-alert>
  </transition>
  <n-space inline>
    <div class="gridFather">
      <n-grid x-gap="12" cols="16" class="anim-left Giboard">
        <n-gi :span="3">
          <n-input-group>
            <n-input-group-label style="width: 90%">用例编号</n-input-group-label>
            <n-input-number v-model:value="EcaseID" :disabled="IDStatus" ref="caseIDRef" @click="changeIDStu"></n-input-number>
          </n-input-group>
        </n-gi>
        <n-gi :span="6">
          <n-input-group>
            <n-select v-model:value="EcaseType" :options="option" placeholder="请选择类型" style="width: 60%" clearable
                      ref="caseTypeRef"></n-select>
            <n-select v-model:value="locationType" :options="locaOption" placeholder="请选择定位类型" clearable
                      ref="caseLocaRef" :disabled="locatAble"></n-select>
            <n-input v-model:value="EcaseTypeValue" placeholder="请输入元素定位值" clearable ref="caseTypeValRef"
                     :disabled="locatValAble"></n-input>
          </n-input-group>
        </n-gi>
        <n-gi :span="3">
          <n-input placeholder="请填写要输入的数据或网址" v-model:value="EcaseData" :disabled="inputDisable" clearable
                   ref="caseDataRef"></n-input>
        </n-gi>
        <n-gi :span="2">
          <n-input placeholder="可以输入功能模块" v-model:value="EcaseModel" clearable ref="caseModelRef"></n-input>
        </n-gi>
        <n-gi :span="1">
          <n-button type="primary" @click="addCase">
            <Icon size="20">
              <Add/>
            </Icon>
            确认添加用例
          </n-button>
        </n-gi>
      </n-grid>
      <n-divider class="dividerStyle"></n-divider>
    </div>
    <div style="height: 3rem"></div>
    <n-table striped bordered v-show="tableShow" class="anim-left caseTable">
      <thead>
      <tr class="tableTitle">
        <td>
          <n-button @click="sortValue= !sortValue">
          用例编号
          <Icon size="15">
            <ArrowSort16Filled/>
          </Icon>
          </n-button>
        </td>
        <td>操作类型</td>
        <td>定位方式</td>
        <td>定位值</td>
        <td>输入数据</td>
        <td>测试模块</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in tableValue" class="anim-left" :key="item[0]">
        <td>{{ item[0] }}</td>
        <td>{{ item[1] }}</td>
        <td>{{ item[2] }}</td>
        <td>{{ item[3] }}</td>
        <td>{{ item[4] }}</td>
        <td>{{ item[5] }}</td>
        <td>
<!--          <n-button type="primary"  size="small" @click="editCase(item)">编辑</n-button>-->
          <n-button type="error"  size="small" @click="delCase(item)">
            <Icon size="20">
              <Delete/>
            </Icon>
            删除
          </n-button>
        </td>
      </tr>
      </tbody>
    </n-table>
  </n-space>
</template>

<script setup>
import {
  NInputGroup,
  NInput,
  NInputGroupLabel,
  NInputNumber,
  NSelect,
  NSpace,
  NGrid,
  NGi,
  NButton,
  NDivider,
  NTable,
  NAlert
} from 'naive-ui'
import {ref, watch, watchEffect,} from "vue";
import {SadCryRegular} from '@vicons/fa'
import {Add,Delete} from '@vicons/carbon'
import {Icon} from '@vicons/utils'
import {ArrowSort16Filled} from '@vicons/fluent'
//定义用例的输入数据
const EcaseID = ref(1)
const EcaseType = ref(null)
const locationType = ref(null)
const EcaseTypeValue = ref(null)
const EcaseData = ref(null)
const EcaseModel = ref(null)
const caseIDRef = ref(null)
const caseTypeRef = ref(null)
const caseLocaRef = ref(null)
const caseTypeValRef = ref(null)
const caseDataRef = ref(null)
const caseModelRef = ref(null)
//设置只有操作类型为input时才可以输入数据，使用watch监听操作类型变化
const locatAble = ref(false)
const locatValAble = ref(false)
const inputDisable = ref(true)
watch((EcaseType), () => {
  inputDisable.value = !(EcaseType.value === 'open' || EcaseType.value === 'input');
  locatAble.value = EcaseType.value === 'open'
  locatValAble.value = EcaseType.value === 'open'
})
//定义用例编号是否能输入，为false为可以输入
const IDStatus = ref(true)
const changeIDStu = ()=>{
  alert('编号自动增加，点击开启编辑模式，不受保护，输入相同编号可替换原来编号的用例！')
  IDStatus.value = false
}
//定义select选择器的值
const option = [
  {
    label: 'open-打开网页',
    value: 'open',
  },
  {
    label: 'click-点击元素',
    value: 'click',
  },
  {
    label: 'input-向元素输入数据',
    value: 'input',
  },
]
const locaOption = [
  {
    label: 'id',
    value: 'id',
  },
  {
    label: 'name',
    value: 'name',
  },
  {
    label: 'xpath',
    value: 'xpath',
  },
  {
    label: 'link text',
    value: 'link text',
  },
  {
    label: 'partial link text',
    value: 'partial link text',
  },
  {
    label: 'tag name',
    value: 'tag name',
  },
  {
    label: 'class name',
    value: 'class name',
  },
  {
    label: 'css selector',
    value: 'css selector',
  },
]
//定义表格数据，用列表添加
const tableValue = ref([])
//添加用例按钮绑定事件，点击按钮将数据添加到表格数据列表
const alertShow = ref(false)
const alertMes = ref('把~东~西~输~全~再~提~交~哦~')
const closeAlert = ref(() => {
  alertMes.value = '那我走？'
  setTimeout(() => {
    alertShow.value = false
    alertMes.value = '把~东~西~输~全~再~提~交~哦~'
  }, 1000)
})
const addCase = () => {
  if (caseTypeRef.value.value === 'open' && caseDataRef.value.value === null) {
    alertShow.value = true
  } else if (caseTypeRef.value.value !== 'open' && (caseLocaRef.value.value === null || caseTypeValRef.value.value === null)) {
    alertShow.value = true
  } else {
    const tablelist = [caseIDRef.value.value, caseTypeRef.value.value, caseLocaRef.value.value, caseTypeValRef.value.value, caseDataRef.value.value, caseModelRef.value.value]
    if (arr(caseIDRef.value.value)){
      tableValue.value.splice(arr(caseIDRef.value.value),1,tablelist)
      console.log(tableValue.value)
    }
    else {
      console.log(arr(caseIDRef.value.value))
      tableValue.value.push(tablelist)
    }
    EcaseType.value = null
    EcaseTypeValue.value = null
    locationType.value = null
    EcaseData.value = null
    EcaseModel.value = null
    EcaseID.value += 1
  }
}

//当没有数据时不显示表格
//监听列表，当sortValue为true则是倒序排列
const sortValue = ref(false)
const tableShow = ref(false)
watchEffect(() => {
  console.log(sortValue.value)
  const a = tableValue.value
  tableShow.value = a.length > 0
  if (sortValue.value) {
    tableValue.value = tableValue.value.sort().reverse()
  }else {
    tableValue.value = tableValue.value.sort()
  }
})

//表格删除按钮事件，实际删除的是列表内容
//获取点击对应的列表值，拿到列表index，根据index删除
const delCase = (item)=>{
  const index_item = tableValue.value.indexOf(item)
  tableValue.value.splice(index_item,1)
  // console.log('@@@@@',index_item)
}

//定义编辑按钮点击事件
function arr(itemID){
  for (let i=0;i<tableValue.value.length;i++){
    if (tableValue.value[i][0] === itemID){
      return tableValue.value.indexOf(tableValue.value[i])
    }
  }
}
// const editCase = (item)=>{
//   console.log('当前ID',item[0])
//   console.log(arr(item[0]))
// }
</script>

<style scoped>
@import "../../static/animation.css";

:deep(.Giboard) {
  text-align: center;
  justify-content: center;
  align-content: center;
}

:deep(.caseTable) {
  text-align: center;
}

:deep(.tableTitle) {
  font-weight: bold;
}
</style>
