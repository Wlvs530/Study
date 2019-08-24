<template>
   <div>
        <span>I am The Body</span><br/>
        <span>Here Is The Prop -{{ BodyProp }}-</span>
    </div>
</template>

<script>
export default {
    props : ['BodyProp']
}
</script>

<style scoped>
    div{
        width : 200px;
        height : 80px;
        background-color:cornflowerblue;
    }
</style>