<template>
    <div id="app">
        <sidebar></sidebar>
        <router-view>
        </router-view>
        <copyright></copyright>
    </div>
</template>

<script>
    import sidebar from './sidebar.vue'
    import copyright from './copyright.vue'

    export default {
        components: {
            sidebar,
            copyright
        }
    }
</script>

<style>
    @font-face {
        font-family:'iconfont';  /* project id 216569 */
        src:url('//at.alicdn.com/t/font_23m8f78jpne45cdi.eot');
        src:url('//at.alicdn.com/t/font_23m8f78jpne45cdi.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_23m8f78jpne45cdi.woff') format('woff'),
        url('//at.alicdn.com/t/font_23m8f78jpne45cdi.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_23m8f78jpne45cdi.svg#iconfont') format('svg');
    }
    .iconfont { font-family:'iconfont'; font-size:16px; font-style:normal; -webkit-font-smoothing:antialiased; -webkit-text-stroke-width:0.2px; -moz-osx-font-smoothing:grayscale; }
    body { margin:0; padding:0; border:0; font-size:12px; font-family:Microsoft YaHei; background-color:#f8f8f8; color:#666; }
    img, a, p, span, h1, h2, h3, ul, ol, li, select, input, dl, dt, dd, table, tr, td, em, div { -webkit-tap-highlight-color:rgba(255, 255, 255, 0); padding:0; margin:0; border:0; text-decoration:none; list-style:none; font-style:normal; -webkit-tap-highlight-color:rgba(255, 255, 255, 0); }
    select, input, img /*,em,b,u,i*/ { vertical-align:middle; -webkit-appearance:none; outline:none; }
    body { background-color:#326b32; }

    #app{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
    }
</style>