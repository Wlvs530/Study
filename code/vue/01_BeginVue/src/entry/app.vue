<template>
    <div>
        First Vue App ! <br>
        {{ Message }} <br>
        <input v-model="Message" />
        <ul>
            <li v-for="Language in Languages" >
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

</style>>