<script setup>
import { NDataTable, NButton, NDrawer,NDrawerContent,NInputGroup,NInput,NInputGroupLabel,NSpace} from 'naive-ui'
import { h, ref,onMounted} from 'vue'

/* 创建数据表结构,传入一个函数给按钮使用，此函数定义的方法在下方定义 */
const createCol = ({ caseEdit }) => {
    return [
        {
            title: '用例编号',
            key: 'caseID',
            align: 'center',
            // render(row) {
            //     return h(
            //         'p',
            //         {   
            //             value: row.caseID,
            //         },
            //         { default: () => row.caseID }
            //     )
            // }

        },
        {
            title: '操作类型',
            key: 'caseType',
            align: 'center',
            render(row) {
                return h(
                    'p',
                    {   id:'casetype',
                        // value: row.caseType,
                        contenteditable: true,
                        // onClick:()=>{
                        //     row.caseType=rowsAttr.text
                        // }
                    },
                    { default: () => row.caseType }
                )
            },
        },
        {
            title: '用例数据',
            key: 'caseData',
            align: 'center',
        },
        {
            title: '操作',
            key: 'actions',
            align: 'center',
            render(row) {
                return h(
                    NButton,
                    {
                        size: 'small',
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

const rowsAttr = ref(null)
onMounted(() => {
    console.log(window.getSelection().toString)
});

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
]
const data = ref([])
for (var item of mydata){
    data.value.push({caseID:item[0],caseType:item[1],caseData:item[2]})
}


/* 定义行的数据填入的函数，函数是点击按钮的回调,点击弹出修改窗口 */
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
const pagination = { pageSze: 10 }

/* 提交表数据 */
// const data = ref(createData())

/* 修改用例数据弹窗界面代码 */
</script>

<template>
    <div class="anim-left">
        <n-data-table
            id="caseCheckTable"
            ref="rowsAttr"
            :columns="columns"
            :data="data"
            :pagination="pagination"
            :max-height="250"
            :row-class-name="rowClassName"
        />
    </div>
    <n-drawer v-model:show="active" :width="502" :placement="placement" :native-scrollbar=false height="300">
        <n-drawer-content style="padding-top: 10px;">
            <template #header>用例修改</template>
            <n-input-group>
                <n-input-group-label :style="{width: '10%'}" style="text-align: center;">用例编号</n-input-group-label>
                <n-input :default-value="EditcaseID" clearable disabled></n-input>
            </n-input-group>
            <n-input-group>
                <n-input-group-label :style="{width: '10%'}" style="text-align: center;">操作类型</n-input-group-label>
                <n-input :default-value="EditcaseType" clearable></n-input>
            </n-input-group>
            <n-input-group>
                <n-input-group-label :style="{width: '10%'}" style="text-align: center;">用例数据</n-input-group-label>
                <n-input :default-value="EditcaseData" clearable></n-input>
            </n-input-group>
            <template #footer>
                <n-button type="primary" style="display: block;">提交修改</n-button>
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