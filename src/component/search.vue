<template>
    <div class="search" @click="hideside">
        <p>
            <input id="ddd" ref="searchInfo" type="text" placeholder="复仇者联盟" onfocus="this.placeholder='';"
                   onblur="this.placeholder='复仇者联盟';" @keyup.enter="search(this.value?this.value:this.placeholder)"/>
            <i @click="search($refs.searchInfo.value?$refs.searchInfo.value:$refs.searchInfo.placeholder)"
               class="iconfont">&#xe6a4;</i>
        </p>
        <span>
            <i @click="$router.push('/home')" class="iconfont">&#xe6cb;</i>
            <i onclick="event.cancelBubble=true;" class="iconfont" @click="toggleside">&#xe6b7;</i>
        </span>
        <ul>
            <router-link tag="li" v-for="(item, index) in searchlist" key :to="'/detail/'+item.id">
                <div :style="'background:url('+item.images.large+') no-repeat center/cover;'"></div>
                <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    import Vuex from 'vuex'

    export default {
        computed: {
            ...Vuex.mapState([
                'searchlist'
            ])
        },
        mounted(){
            this.setside('searchlist')
        },
        methods: {
            ...Vuex.mapMutations([
                'setside',
                'hideside',
                'toggleside'
            ]),
            ...Vuex.mapActions([
                'search'
            ])
        }
    }
</script>

<style lang="scss">
    .search {
        position:relative;

        p {
            white-space:nowrap;
            height:40px;
            line-height:40px;
            position:relative;
            font-size:0;
            width:50%;
            margin:0 auto;
            background-color:skyblue;

            input {
                font-size:16px;
                width:100%;
                height:100%;
                background-color:#e5dfdf;
                padding:0 20px;
                color:#666;
                box-sizing:border-box;
                background-color:inherit;
            }
        }

        i {
            position:absolute;
            right:0;
            top:0;
            width:40px;
            height:100%;
            background-color:inherit;
            text-align:center;
            color:#fff;
            cursor:pointer;
        }

        & > span {
            position:absolute;
            right:0;
            top:0;
            height:40px;
            line-height:40px;

            i:first-child { right:5px; }
            i:nth-child(2) { right:45px; }
        }

        ul {
            font-size:0;
            border-top:1px solid transparent;
            box-sizing:border-box;

            li {
                width:80%;
                display:flex;
                margin:10% auto;
                box-sizing:border-box;
                cursor:pointer;
                background:#ff3a3a;
                border-radius:4px;
                overflow:hidden;

                div {
                    flex:4;
                    padding-top:56%;
                }

                span {
                    flex:6;
                    font-size:16px;
                    color:antiquewhite;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
            }
        }
    }
</style>