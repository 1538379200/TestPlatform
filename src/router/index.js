import {createRouter, createWebHashHistory} from 'vue-router'
const uitest = ()=> import('../pages/UI/uitest.vue')
const porttest = ()=> import('../pages/Post/porttest.vue')
const indexpage = ()=> import('../pages/index.vue')
const caseupload = ()=>import('../pages/UI/caseupload.vue')
const caseCheck = ()=>import('../pages/UI/caseCheck.vue')
const testPage = ()=>import('../pages/UI/testPage.vue')
const caseEdit = ()=>import('../pages/UI/caseEditPage.vue')

const routes = [
    {
        path:'/',
        component:indexpage
    },
    {
        path:'/uitest',
        component:uitest,
        children:[
            {
                path:'caseupload',
                name:'caseupload',
                component:caseupload,
            }
        ]
    },
    {
        path:'/porttest',
        component:porttest
    },
    {
        name:'caseCheck',
        path:'/caseCheck',
        component:caseCheck,
    },
    {
        name:'testPage',
        path:'/test',
        component:testPage,
    },
    {
        name:'caseEdit',
        path:'/caseEdit',
        component:caseEdit,
    },
    {
        name:'mycases',
        path:'/mycases',
        component:()=>import('../pages/UI/MyTestCase.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router