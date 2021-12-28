<script setup>
import {CloudUploadAlt} from '@vicons/fa'
import {Icon} from '@vicons/utils'
import {NUpload,NUploadDragger,NIcon,NText,NP} from 'naive-ui'
</script>
<template>
    <div class="anim-left">
        <n-upload action="">
            <n-upload-dragger>
            <div style="margin-bottom: 12px;">
                <n-icon size="48" :depth="3">
                <Icon>
                    <CloudUploadAlt></CloudUploadAlt>
                </Icon>
                </n-icon>
            </div>
            <n-text style="font-size: 16px;">点击或者拖动用例文件到该区域来上传</n-text>
            <n-p depth="3" style="margin: 8px 0 0 0;">
                请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
            </n-p>
            </n-upload-dragger>
        </n-upload>
    </div>
</template>
<style scoped>
@import '../../static/animation.css';
</style>