<template>
    <div>
        <n-table>
            <n-tr>
                <n-td>头</n-td>
            </n-tr>
            <n-tr class="red">
                <td>身子</td>
                <n-td>身子</n-td>
            </n-tr>
        </n-table>
    </div>
    <div>
        <table>
            <tr>
                <td>头</td>
            </tr>
            <tr>
                <td>身子</td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import {NTable,NTd,NTr} from 'naive-ui'

</script>

<style lang="less" scoped>
:deep(td){
    color: red !important;
}
</style>