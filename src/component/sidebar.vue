<template>
    <div class="sidebar">
        <div class="banner">{{sidetitle}}</div>
        <div class="items">
            <div>
                <i class="iconfont">&#xe602;</i><span>电影</span>
                <ul v-if="sidestate=='ratelist'">
                    <router-link tag="li" :to="'/detail/'+item.subject.id" v-for="(item,index) in ratelist" key>
                        {{item.subject.title}}
                    </router-link>
                </ul>
                <ul v-else>
                    <router-link tag="li" :to="'/detail/'+item.id" v-for="(item,index) in searchlist" key>
                        {{item.title}}
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Vuex from 'vuex'

    export default {
        computed: {
            ...Vuex.mapState([
                'ratelist',
                'searchlist',
                'sidestate',
                'sideshow'
            ]),
            ...Vuex.mapState({
                sidetitle(state){
                    if (state.sidestate == 'ratelist')
                        return '排行榜'
                    else
                        return '搜索结果'
                }
            })
        },
        watch: {
            sideshow(){
                if (this.sideshow) {
                    this.$el.style.left = '0'
                }
                else {
                    this.$el.style.left = '-200px'
                }
            }
        }
    }
</script>

<style lang="scss">
    .sidebar {
        position:fixed;
        left:-200px;
        height:100vh;
        width:200px;
        z-index:2;
        transition:left .5s ease;
    }
    .banner {
        height:20vh;
        background-color:#3c3c3c;
        color:#0088ff;
        font-size:20px;
        line-height:20vh;
        text-align:center;
        border-bottom:1px solid #fff;
    }
    .items {
        background-color:#355f35;
        height:80%;

        div {
            font-size:24px;
            padding:10px 30px;
            color:#e2ff00;

            i { font-size:20px; }

            span {
                margin-left:20px;
                font-family:cursive;
            }

            ul {
                font-size:14px;
                color:cyan;
                margin:10px 5px;

                li {
                    cursor:pointer;
                    height:22px;
                    line-height:22px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;

                    &:hover { background-color:lightcoral; }
                }
            }
        }
    }
</style>