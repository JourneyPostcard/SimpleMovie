import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import home from './component/home.vue'
import search from './component/search.vue'
import detail from './component/detail.vue'

export default new VueRouter({
    // mode: 'history',
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {path: '/search', component: search},
        {path: '/detail/:id', component: detail}
    ]
})