<template>
    <div>
        <Head :HeadProp="headValue"></Head><br/>
        <Body :BodyProp="bodyValue"></Body>
    </div>
</template>

<script>
import Head from './head.vue';
import Body from './body.vue';

export default {
    data(){
        return {
            headValue:'Head Data',
            bodyValue:'Body Data'
        };
    },
    components:{
        Head,
        Body
    },
}
</script>

<style>

</style>