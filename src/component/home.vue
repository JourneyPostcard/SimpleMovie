<template>
    <div class="home" @click="hideside">
        <menuv @fresh="getrate"></menuv>
        <filmlist></filmlist>
    </div>
</template>

<script>
    import Vuex from 'vuex'
    import menuv from './menuv.vue'
    import filmlist from './filmlist.vue'

    export default {
        components: {
            menuv,
            filmlist
        },
        mounted(){
            if (this.$store.state.ratelist.length == 0)
                this.getrate()
            this.setside('ratelist')
        },
        methods: {
            ...Vuex.mapMutations([
                'setside',
                'hideside'
            ]),
            ...Vuex.mapActions([
                'getrate'
            ])
        }
    }
</script>

<style>
    .home { position:relative;}
</style>