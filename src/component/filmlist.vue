<template>
    <div class="list">
        <transition-group tag="ul" name="list">
            <router-link tag="li" v-for="(item, index) in ratelist" key :to="'/detail/'+item.subject.id">
                <div :style="'background:url('+item.subject.images.large+') no-repeat center/cover;'"></div>
                <p>{{item.subject.title}}</p>
                <span>{{item.subject.rating.average}}</span>
            </router-link>
        </transition-group>
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
                box-sizing:border-box;
                cursor:pointer;
                background:#ff3a3a;
                border-radius:4px;
                overflow:hidden;

                div {
                    width:100%;
                    padding-top:140%;
                }

                p {
                    width:80%;
                    display:inline-block;
                    padding:2px 0 0 5px;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    color:#00ffff;
                }

                span {
                    color:yellow;
                    display:inline-block;
                    padding:0 7px 5px 0;
                    text-align:right;
                    width:100%;
                    box-sizing:border-box;
                }
            }
        }
    }
    /*.list-enter-active, .list-leave-active {
        transition:all .3s ease-in;
    }
    .list-enter, .list-leave-active {
        opacity:0;
        -webkit-transform:scale(0);
    }*/
    .list-enter-active {
        animation:showup .8s;
    }
    .list-leave-active {
        animation:vanish .5s;
        /*position:absolute;*/
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