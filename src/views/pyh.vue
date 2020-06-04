<template>
    <div class="p-wrap">
        <span @click="toPyh">切换</span>
        {{tip}}
    </div>
</template>
<script>
export default {
    data(){
        return{
            tip:'欢迎使用Vue项目pyh'
        }
    },
    mounted() {
        
    },
    methods: {
        toPyh(){
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>