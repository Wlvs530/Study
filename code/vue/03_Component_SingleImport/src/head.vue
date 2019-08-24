<template>
    <div>
        <span>I am The Head</span><br/>
        <span>Here Is The Prop -{{ HeadProp }}-</span>
    </div>
</template>

<script>
export default {
    props : ['HeadProp']
}
</script>

<style scoped>
    div{
        width : 200px;
        height : 80px;
        background-color: blanchedalmond;
    }
</style>