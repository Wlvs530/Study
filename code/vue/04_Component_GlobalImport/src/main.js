import Vue from 'vue';
import App from './app.vue';
import Head from './head.vue';
import Body from './body.vue';

Vue.component('Head',Head);
Vue.component('Body',Body);

new Vue({
    el : '#app',
    render : c => c(App)
});