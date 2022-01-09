<template>
  <div class="anim-left">
    <n-table>
      <thead>
        <tr class="tableHeader">
          <td>用例文件名</td>
          <td>用例上传时间</td>
          <td>操作</td>
        </tr>
      </thead>
    </n-table>
  </div>
</template>

<script setup>
import {NTable} from 'naive-ui'
</script>

<style scoped>
@import "../../static/animation.css";
.tableHeader{
  font-weight: bold;
}
</style>