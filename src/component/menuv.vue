<template>
    <header class="menuv">
        <h1>{{title}}</h1>
        <div>
            <!--阻止事件冒泡-->
            <i onclick="event.cancelBubble=true;" class="iconfont" @click="toggleside">&#xe6b7;</i>
            <i class="iconfont" @click="$emit('fresh')">&#xe6a0;</i>
            <i class="iconfont" @click="$router.push('/search')">&#xe6a4;</i>
        </div>
    </header>
</template>

<script>
    import Vuex from 'vuex'

    export default {
        computed: {
            ...Vuex.mapState([
                'title'
            ])
        },
        methods: {
            ...Vuex.mapMutations([
                'toggleside'
            ])
        }
    }
</script>

<style lang="scss">
    .menuv {
        background:#474a4f;
        text-align:center;
        height:50px;
        line-height:50px;
        font-family:楷体;
        position:relative;

        h1 { color:#FE007F; }

        div {
            position:absolute;
            top:50%;
            right:0;

            i {
                transform:translateY(-50%);
                color:#FE007F;
                cursor:pointer;
                height:25px;
                line-height:25px;
                width:25px;
                font-weight:bolder;
                float:right;
                margin-right:5px;
            }
        }
    }
</style>