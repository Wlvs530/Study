<template>
    <div>
        First Vue App ! <br>
        <div v-cloak>
            {{ Message }} <br>
        </div>
        <input v-model="Message" />
        <ul>
            <li v-for="(Language,index) in Languages" :key="index">
                {{ Language.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Message : 'Hello, World !',
            Languages : [{ name : 'Java'},{name : 'C#'},{name : 'C'}]
        }
    }
}
</script>

<style scoped>
    [v-cloak] {
        display: none;
    }
</style>>