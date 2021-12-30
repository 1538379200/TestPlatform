<template>
    <div>
        <h1>测试页面</h1>
        <h2>{{$route.params.caseFile}}</h2>
    </div>
</template>
<script setup>
import {useRoute} from 'vue-router'
const $route = useRoute()
console.log($route.params.caseFile)
</script>
<style scoped>

</style>
