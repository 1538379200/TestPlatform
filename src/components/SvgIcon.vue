<script setup>
import {computed} from 'vue'

const props=defineProps({
    prefix:{
        type:String,
        default:'icon',
    },
    name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        default:'#333'
    }
})

const symbolId = computed(()=>{
    return '#'+props.prefix+'-'+props.name
})
</script>

<template>
    <svg aria-hidden="true">
        <use :href="symbolId" :fill="color"></use>
    </svg>
</template>