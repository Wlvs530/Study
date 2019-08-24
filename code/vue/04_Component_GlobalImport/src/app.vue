<template>
    <div>
        <Head :HeadProp="headValue"></Head><br/>
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
}
</script>

<style>

</style>