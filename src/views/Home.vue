<template>
    <div class="p-wrap">
        欢迎使用Vue项目
        {{tip}}
        {{moduleTip}}
        <el-button type="primary">饿了吗Button组件</el-button>
    </div>
</template>
<script>
export default {
    mounted(){
         $(".p-wrap").click(function(){
            alert('Jquery安装成功')
        });
    }
}
</script>