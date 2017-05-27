<template>
    <div class="list">
        <ul>
            <router-link tag="li" v-for="(item, index) in ratelist" :to="'/detail/'+item.subject.id" key>
                <transition name="expand">
                    <a href="" v-if="item.img" key>
                        <div class="movie-post"
                             :style="'background:url('+item.img+') no-repeat center/cover;'"></div>
                        <div class="movie-title">
                            <p>{{item.subject.title}}</p><span>{{item.subject.rating.average}}</span>
                        </div>
                    </a>
                </transition>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import Vuex from 'vuex'

    export default {
        computed: {
            ...Vuex.mapState([
                'ratelist'
            ])
        }
    }
</script>

<style lang="scss">
    .list {
        width:100%;

        ul {
            overflow:hidden;
            display:table;
            margin:0 auto;
            width:80%;
            padding:10px;

            li {
                display:inline-block;
                width:21%;
                margin:2%;
                padding-top:29.4%;
                height:40px;
                position:relative;

                a {
                    position:absolute;
                    left:0;
                    top:0;
                    width:100%;
                    overflow:hidden;
                    border-radius:4px;
                }

                .movie-post {
                    padding-top:140%;
                }

                .movie-title {
                    background:#ff3a3a;
                    font-size:12px;
                    height:40px;
                    line-height:20px;
                }

                p {
                    width:80%;
                    padding-left:5px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    color:#00ffff;
                }

                span {
                    color:yellow;
                    display:inline-block;
                    padding-right:5px;
                    text-align:right;
                    width:100%;
                    box-sizing:border-box;
                }
            }
        }
    }
    .expand-enter-active {
        animation:showup .8s;
    }
    .expand-leave-active {
        animation:vanish .5s;
    }
    @keyframes showup {
        0% {
            -webkit-transform:scale(0);
        }
        75% {
            -webkit-transform:scale(1.1);
        }
        100% {
            -webkit-transform:scale(1);
        }
    }
    @keyframes vanish {
        0% {
            -webkit-transform:translateX(0);
            opacity:1;
        }
        100% {
            -webkit-transform:translateX(-400%);
            opacity:0;
        }
    }
</style>