<template>
    <footer class="copyright" @click="$store.commit('hideside')">
        <p>
            Powered By CZH
            <br>
            @2017
        </p>
    </footer>
</template>

<script>
</script>

<style lang="scss">
    .copyright {
        font-size:14px;
        text-align:center;
        color:#4a9871;

        p {
            padding:10px;
            line-height:25px;
            height:50px;
        }
    }
</style>