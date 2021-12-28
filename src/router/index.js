import {createRouter,createWebHashHistory,RouterLink,RouterView} from 'vue-router'
const uitest = ()=> import('../pages/UI/uitest.vue')
const porttest = ()=> import('../pages/Post/porttest.vue')
const indexpage = ()=> import('../pages/index.vue')
const caseupload = ()=>import('../pages/UI/caseupload.vue')
const caseCheck = ()=>import('../pages/UI/caseCheck.vue')

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
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router