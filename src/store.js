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
            s.ratelist.push(p)
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
                    for (let i = 0, length = arr.length; i < length; i++) {
                        let img = new Image()
                        img.onload = function () {
                            commit('setrate', arr[i])
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