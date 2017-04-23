<template>
    <div class="detail" v-if="detail" @click="hideside">
        <header class="header">
            <div class="back" :style="'background:url('+detail.images.large+') no-repeat center/cover;'"></div>
            <div class="front">
                <span :style="'background:url('+detail.images.large+') no-repeat center/cover;'"></span>
                <p>
                    {{detail.title}}
                    <br>
                    {{detail.rating.average}}
                </p>
            </div>
            <!--<router-link tag="i" to="/home">&#xe6cb;</router-link>router-link无法显示iconfont-->
            <i @click="$router.push('/home')" class="iconfont">&#xe6cb;</i>
            <i onclick="event.cancelBubble=true;" class="iconfont" @click="toggleside">&#xe6b7;</i>
        </header>
        <ul class="summary">
            <li>
                <p>原名</p>
                <span>{{detail.original_title}}</span></li>
            <li>
                <p>类型</p>
                <span>{{detail.genres.join('/')}}</span></li>
            <li>
                <p>年代</p>
                <span>{{detail.year}}</span></li>
            <li>
                <p>地区</p>
                <span>{{detail.countries.join('/')}}</span></li>
            <li>
                <p>又名</p>
                <span>{{detail.aka.join('/')}}</span></li>
            <li>
                <p>想看人数</p>
                <span>{{detail.wish_count}}</span></li>
            <li>
                <p>看过人数</p>
                <span>{{detail.collect_count}}</span></li>
            <li>
                <p>评分人数</p>
                <span>{{detail.ratings_count}}</span></li>
            <li>
                <p>短评数量</p>
                <span>{{detail.comments_count}}</span></li>
            <li>
                <p>影评数量</p>
                <span>{{detail.reviews_count}}</span></li>
        </ul>
        <p class="description">{{detail.summary}}</p>
        <div class="stuff">
            <p>导演</p>
            <ul>
                <li v-for="(item, index) in detail.directors" key>
                    <div :style="'background:url('+(item.avatars!=null?item.avatars.large:'')+') no-repeat center/cover;'"></div>
                    <span>{{item.name}}</span></li>
            </ul>
        </div>
        <div class="stuff">
            <p>主演</p>
            <ul>
                <li v-for="(item, index) in detail.casts" key>
                    <div :style="'background:url('+(item.avatars!=null?item.avatars.large:'')+') no-repeat center/cover;'"></div>
                    <span>{{item.name}}</span></li>
            </ul>
        </div>
    </div>
    <div v-else=""></div>
</template>

<script>
    import Vuex from 'vuex'

    export default {
        computed: {
            ...Vuex.mapState([
                'detail'
            ])
        },
        watch: {
            '$route': 'getdetail'
        },
        mounted(){
            this.getdetail()
        },
        methods: {
            getdetail(){
                if (!this.detail || this.detail.id != this.$route.params.id) {
                    this.$store.dispatch('getdetail', this.$route.params.id)
                }
            },
            ...Vuex.mapMutations([
                'hideside',
                'toggleside'
            ])
        }
    }
</script>

<style lang="scss">
    .detail {
        color:#000;
    }
    .header {
        width:100%;
        height:40vh;
        position:relative;
        background-color:#000;
        margin-bottom:70px;

        .back {
            filter:blur(10px);
            background-color:#000;
            width:100%;
            height:100%;
        }
        .front {
            position:absolute;
            z-index:1;
            bottom:-30px;
            left:0;
            width:100%;
            font-weight:bolder;

            &::after {
                content:'';
                display:inline-block;
                width:100%;
                position:absolute;
                bottom:0;
                height:60px;
                background-color:rgba(0, 255, 255, 0.3);
                left:0;
                z-index:-1;
            }

            span {
                position:absolute;
                bottom:0;
                width:30%;
                padding-top:42%;
                left:10%;
            }

            p {
                font-size:18px;
                position:absolute;
                bottom:0; left:45%;
                height:60px;
                line-height:30px;
                color:#962a2a;
            }
        }

        i {
            position:absolute;
            color:#FE007F;
            cursor:pointer;
            height:25px;
            line-height:25px;
            width:25px;
            font-size:25px;

            &:first-of-type {
                top:20px;
                right:20px;
            }

            &:nth-of-type(2) {
                top:20px;
                right:60px;
            }
        }
    }
    .summary {
        width:80%;
        overflow:hidden;
        margin:0 10%;

        li {
            float:left;
            width:50%;
            font-size:15px;
            font-family:cursive;
            height:50px;
            position:relative;

            p {
                display:inline-block;
                position:absolute;
                left:0;
            }

            span {
                color:#00ffff;
                position:absolute;
                right:20px;
                width:65%;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
                text-align:right;
            }
        }
    }
    .description {
        width:100%;
        background-color:#426042;
        color:#aaa;
        padding:15px;
        font-size:14px;
        text-indent:2em;
        box-sizing:border-box;
    }
    .stuff {
        width:90%;
        display:table;
        margin:0 auto;

        &:last-child {
            margin-bottom:50px;
        }

        p {
            font-size:16px;
            margin-top:10px;
        }

        ul {
            font-size:0;

            li {
                width:47%;
                display:inline-flex;
                text-align:center;
                background-color:plum;
                overflow:hidden;
                margin:10px 0;
                border-radius:2%;
                color:brown;

                &:nth-child(2n+1) {
                    margin-right:6%;
                }

                div {
                    flex:1;
                    padding-top:66%;
                }

                span {
                    flex:1;
                    font-size:12px;
                    margin:8px 0;
                }
            }
        }
    }
</style>