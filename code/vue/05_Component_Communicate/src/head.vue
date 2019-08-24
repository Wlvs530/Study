<template>
    <div>
        <span>I am The Head</span><br/>
        <span>Here Is The Prop -{{ HeadProp }}-</span><br/>
        <button @click="Emit">发送</button>
    </div>
</template>

<script>
export default {
    props : ['HeadProp'],
    methods:{
        Emit(){
            this.$emit('phone','Hello,I am The Head.');
        }
    }
}
</script>

<style scoped>
    div{
        width : 400px;
        height : 80px;
        background-color: blanchedalmond;
    }
</style>