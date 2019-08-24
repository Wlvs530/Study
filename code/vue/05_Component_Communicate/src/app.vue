<template>
    <div>
        <button @click="Listen">监听</button><br/>
        <Head :HeadProp="headValue" ref='Head'></Head><br/>
        <Body :BodyProp="bodyValue"></Body>
    </div>
</template>

<script>

export default {
    data(){
        return {
            headValue:'Head Data',
            bodyValue:'Body Data'
        };
    },
    methods:{
        Listen(){
            console.log('Listening...');
            this.$refs.Head.$on('phone',msg=>{
                this.headValue = msg;
                console.log(msg);
            } );
        }
    }
}
</script>

<style>

</style>