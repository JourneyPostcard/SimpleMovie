import Vue from 'vue'
import router from './router'
import store from './store'
import app from './component/app.vue'

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(app)
});
