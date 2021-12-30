<template>
    <n-alert closable type="info" title="炒鸡温柔的提示" v-if="tipShow" show-icon :on-after-leave="tipOut">你以为刷新界面我就会重新运行？</n-alert>
    <div>
        <h1>测试页面</h1>
        <h2>{{$route.params.caseFile}}</h2>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {ref} from 'vue'
import {NAlert} from 'naive-ui'
const $route = useRoute()

//判断是否有caseFile的文件，没有则不去执行代码
const tipShow = ref(false)
const tipOut = ()=>{
    window.history.back()
}
if ($route.params.caseFile){
    console.log($route.params.caseFile)
}else{
    tipShow.value=true
}
</script>

<style scoped>

</style>
