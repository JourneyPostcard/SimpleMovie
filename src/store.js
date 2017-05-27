import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'

export default new Vuex.Store({
    state: {
        ratelist: [],
        searchlist: [],
        title: '',
        sidestate: '',
        sideshow: false,
        detail: null
    },
    mutations: {
        setrate(s, p){
            s.ratelist = p.slice()
        },
        addimg(s, p){
            //以下两种方法都触发渲染。但没有动态绑定:key（而且得是变化的值），所以只渲染innerHTML，而不重新渲染此元素
            Vue.set(s.ratelist[p.index], 'img', p.img)
            //s.ratelist.splice(p.index, 1, {...s.ratelist[p.index], img: p.img})

            //添加成功，但不会触发渲染（连innerHTML都不重新渲染）
            //s.ratelist[p.index].img = p.img
        },
        clearrate(s){
            s.ratelist.splice(0, s.ratelist.length)
        },
        setsearch(s, p){
            s.searchlist = p
        },
        settitle(s, p){
            s.title = p
        },
        setside(s, p){
            s.sidestate = p
        },
        toggleside(s){
            s.sideshow = !s.sideshow
        },
        hideside(s){
            s.sideshow = false
        },
        setdetail(s, p){
            s.detail = p
        },
        cleardetail(s){
            s.detail = null
        }
    },
    actions: {
        getrate({commit}){
            axios.get('/api/v2/movie/us_box', {params: {city: '深圳'}}).then(function (res) {
                console.log('rateResult:')
                console.log(res)
                let arr = res.data.subjects
                commit('clearrate')
                setTimeout(function () {
                    commit('setrate', arr)
                    for (let i = 0, length = arr.length; i < length; i++) {
                        let img = new Image()
                        img.onload = function () {
                            commit('addimg', {index: i, img: img.src})
                        }
                        img.src = arr[i].subject.images.large
                    }
                }, 500)

                commit('settitle', res.data.title)
            }).catch(function (res) {
                console.log('wrong:')
                console.log(res)
            })
        },
        search({commit}, p){
            axios.get('/api/v2/movie/search?q=' + p).then(function (res) {
                console.log('searchResult:')
                console.log(res)
                commit(
                    'setsearch',
                    res.data.subjects
                )
            }).catch(function (res) {
                console.log('wrong:')
                console.log(res)
            })
        },
        getdetail({commit}, p){
            commit('cleardetail')
            axios.get('/api/v2/movie/subject/' + p,).then(function (res) {
                console.log('detail:')
                console.log(res)
                commit('setdetail', res.data)
            }).catch(function (res) {
                console.log('wrong:')
                console.log(res)
            })
        }
    }
})