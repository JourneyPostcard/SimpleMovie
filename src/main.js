import Vue from 'vue'
import router from './router'
import store from './store'
import app from './component/app.vue'
import myPlugin from './myPlugin'
Vue.use(myPlugin)

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(app)
});
