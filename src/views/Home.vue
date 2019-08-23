<template>
    <div class="p-wrap">
        欢迎使用Vue项目
        {{tip}}
        {{moduleTip}}
        <el-button type="primary">饿了吗Button组件</el-button>
    </div>
</template>
<script>
import * as API from 'api/demo';
export default {
    mounted() {
        $(".p-wrap").click(function () {
            alert('Jquery安装成功')
        });
    },
    methods: {
        get() {
            API.get().then(res => {
            }).catch(err => {
            })
        },
        get2() {
            let data =new URLSearchParams;
            data.append('param',1)
            API.get2(data).then(res => {
            }).catch(err => {
            })
        },
        post() {
            let data =new URLSearchParams;
            data.append('param',1)
            API.post(data).then(res => {
            }).catch(err => {
            })
        }
    }
}
</script>