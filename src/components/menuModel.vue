<script setup>
import {h,defineProps} from 'vue'
import {RouterLink} from 'vue-router'
import {NMenu} from 'naive-ui'
const props = defineProps({
    toUrl:{
        type:String,
        default:'/',
    },
    muneName:{
        type:String,
        default:'自动化测试平台'
    },
    menuKey:{
        type:String,
        default:'home',
    }
})
const menuOptions = [
    {
        label:()=>
            h(
                RouterLink,
                {
                    to:{
                        path:props.title
                    }
                },
                {default:()=>props.muneName}
            ),
            key: props.menuKey
    }
]

</script>
<template>
<n-menu :options="menuOptions"></n-menu>
</template>