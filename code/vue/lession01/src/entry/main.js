import Vue from 'vue';
import App from './app.vue'

new Vue({
    el : '#app',
    render : function(creater){
        return creater(App);
    }
});