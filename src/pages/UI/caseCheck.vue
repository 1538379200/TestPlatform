<script setup>
import { NDataTable, NButton, NDrawer,NDrawerContent,NInputGroup,NInput,NInputGroupLabel,NSpace,NSelect,NGrid,NGi} from 'naive-ui'
import loading from 'naive-ui/lib/_internal/loading'
import { h, ref,onMounted} from 'vue'
import {Icon} from '@vicons/utils'
import {CalligraphyPenCheckmark20Filled} from '@vicons/fluent'
import {ArrowCircleUp,Kickstarter} from '@vicons/fa'

/* 创建数据表结构,传入一个函数给按钮使用，此函数定义的方法在下方定义 */
const createCol = ({ caseEdit }) => {
    return [
        {
            title: '用例编号',
            key: 'caseID',
            align: 'center',

        },
        {
            title: '操作类型',
            key: 'caseType',
            align: 'center',
        },
        {
            title: '用例数据',
            key: 'caseData',
            align: 'center',
            ellipsis: {
                tooltip: true
                }
        },
        {
            title: '操作',
            key: 'actions',
            align: 'center',
            render(row) {
                return h(
                    NButton,
                    {   strong:true,
                        size: 'small',
                        secondary:true,
                        round:true,
                        type:'success',
                        /* 这样也可以，返回一个事件而已 */
                        /*
                        onClick:()=>{
                            alert(row.key)
                        }
                        */
                        onClick: () => caseEdit(row)
                    },
                    { default: () => '编辑' }
                )
            },
        }
    ]
}

/* 创建表格数据 */
// const createData = (row)=>[
//     {
//         key:1,
//         caseID:1,
//         // caseType:'input',
//         caseType:'input',
//         caseData:'xxxxxxx',
//     },
//     {
//         key:2,
//         caseID:2,
//         caseType:'click',
//         caseData:'yyyyyyy',
//     },
// ]


// const data = Array.apply(null,{length:mydata.length}).map((_,mydata)=>{
//     return {
//         caseID:mydata,
//         caseType:mydata,
//         caseData:mydata,
//     }
// })

/* 自定义数据传入，和上方一样处理
    需要注意循环，使用of才能取到列表里面的值
    使用in是取列表的key，比如此处如果使用in，就需要mydata[item]*/
const mydata = [
    [1,2,3],
    [2,3,4],
    [3,4,5],
    [4,5,6],
    [88,88,88],
    [6,6,6],
    [6,5,4],
    [8,8,8],
    [67,8,9],
    [4,7,3],
    [8,3,7],
    [0,8,6],
    [3,4,6],
    [54,6,8],
]
const data = ref([])
for (var item of mydata){
    data.value.push({caseID:item[0],caseType:item[1],caseData:item[2]})
}


/* 定义行的数据填入的函数，函数是点击按钮的回调,点击弹出修改窗口，将行数据带出 */
const active = ref(false)
const placement = ref('top')
let EditcaseID = ref('')
let EditcaseType = ref('')
let EditcaseData = ref('')
let columns = createCol({
    caseEdit(rowData) {
        active.value = true,
        EditcaseID.value = String(rowData.caseID),
        EditcaseType.value = String(rowData.caseType),
        EditcaseData.value = String(rowData.caseData)
    },
})


/* 满足条件，给行添加一个类型，可用类名对行做属性修改 */
const rowClassName = (row) => {
    if (row.caseID > 1) {
        return 'styleRed'
    } else {
        return null
    }
}

/* 定义表格页面大小 */
const pagination = { pageSize: 10 }

/* 提交表数据 */
// const data = ref(createData())

//获取drawer抽屉的输入值，供后续数据传递,次数直接给出响应式的默认value其实下面的defaultvalue已经没用了
//将上方的行数据放入这里作为一个默认数据显示
const drawerValue = ref(null)
const valueID = ref(EditcaseID)
const valueType = ref(EditcaseType)
const valueData = ref(EditcaseData)
const commitEdit = ()=>{
    console.log(valueID.value)
    console.log(valueType.value)
    console.log(valueData.value)
}
//更改抽屉头部样式
const drawerHeaderStyle = {
    'justify-content': 'center',
    'font-weight': 'bold',
}

//select下拉框配置
//options配置下拉框选项
//selectValue双向绑定选择值
//checkBtn操作选项值，后期用作传输给服务器
const options = ref([
    {
        label:'第一个选项',
        value:'options-1'
    },
    {
        label:'第二个选项',
        value:'options-2',
    }
])
const selectValue = ref(null)
const checkBtn = ()=>{
    console.log(selectValue.value)
}
const gridStyle = {
    'padding':'0 0 3rem 0',
    'position': 'sticky',
}

//设置开始测试按钮样式，进行底部固定
const startTestBtn = {
    padding:'0 5rem 0 5rem',
    position: 'fixed',
    bottom: '0.2rem',
    left: 0,
    right: 0,
}

</script>

<template>
    <n-grid x-gap="12" y-gap="10" :cols="4" :style="gridStyle">
        <n-gi :span="3">
        <n-select
            v-model:value="selectValue"
            filterable
            placeholder="选择用例文件"
            :options="options"
            clearable
            remote
        />
        </n-gi>
        <n-gi :span="1">
            <n-button @click="checkBtn" :block=true type="primary" round>
                <Icon size="20" style="padding: 0 5px 0 0">
                    <CalligraphyPenCheckmark20Filled></CalligraphyPenCheckmark20Filled>
                </Icon>
                开始检测
                </n-button>
        </n-gi>
    </n-grid>
    <div class="anim-left">
        <n-data-table
            striped
            :columns="columns"
            :data="data"
            :pagination="pagination"
            :max-height="400"
            :row-class-name="rowClassName"
            :min-height="400"
        />
    </div>
    <n-button :block=true type="primary" :style="startTestBtn">
        <Icon size="20" style="padding: 0 5px 0 0">
            <Kickstarter></Kickstarter>
        </Icon>
        开始测试
    </n-button>
    <n-drawer v-model:show="active" :width="502" :placement="placement" :native-scrollbar=false height="300">
        <n-drawer-content style="padding-top: 10px;" :header-style="drawerHeaderStyle">
            <template #header>用例修改</template>
            <n-input-group>
                <n-input-group-label :style="{width: '10%'}" style="text-align: center;">用例编号</n-input-group-label>
                <n-input :default-value="EditcaseID" clearable disabled ref="drawerValue" v-model:value="valueID"></n-input>
            </n-input-group>
            <n-input-group>
                <n-input-group-label :style="{width: '10%'}" style="text-align: center;">操作类型</n-input-group-label>
                <n-input :default-value="EditcaseType" clearable v-model:value="valueType"></n-input>
            </n-input-group>
            <n-input-group>
                <n-input-group-label :style="{width: '10%'}" style="text-align: center;">用例数据</n-input-group-label>
                <n-input :default-value="EditcaseData" clearable v-model:value="valueData"></n-input>
            </n-input-group>
            <template #footer>
                <n-button type="primary" @click="commitEdit" :block=true>
                    <Icon size="20" style="padding: 0 5px 0 0 ">
                        <ArrowCircleUp></ArrowCircleUp>
                    </Icon>
                    提交修改
                </n-button>
            </template>
        </n-drawer-content>
    </n-drawer>
</template>

<style scoped>
@import "../../static/animation.css";

/* 定义表中添加的类名属性 */
:deep(.styleRed td) {
    color: red;
}
:deep(td) {
    font-weight: bold;
}
.n-input-group{
    padding-top: 10px;
}
</style>