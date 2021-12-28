<script setup>
import { Blind } from '@vicons/fa'
import { NDataTable, NTag, NButton, NInput, NAlert, NPopselect } from 'naive-ui'
import { h, readonly, ref,onMounted} from 'vue'

/* 创建数据表结构,传入一个函数给按钮使用，此函数定义的方法在下方定义 */
const createCol = ({ caseEdit }) => {
    return [
        {
            title: '用例编号',
            key: 'caseID',
            align: 'center',
            render(row) {
                return h(
                    'p',
                    {   
                        value: row.caseID,
                    },
                    { default: () => row.caseID }
                )
            }

        },
        {
            title: '操作类型',
            key: 'caseType',
            align: 'center',
            render(row) {
                return h(
                    'p',
                    {   id:'casetype',
                        value: row.caseType,
                        contenteditable: true,
                        onClick:()=>{
                            row.caseType=document.getElementById('casetype').innerText
                        }
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
                    { default: () => '提交修改' }
                )
            },
        }
    ]
}

const rowsAttr = ref(null)
onMounted(() => {
    console.log(rowsAttr.value.data)
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


/* 定义行的数据填入的函数，函数是点击按钮的回调 */
const columns = createCol({
    caseEdit(rowData) {
        alert(rowData.caseType)
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
</style>