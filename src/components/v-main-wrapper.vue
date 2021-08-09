<template>
    <div class="v-main-wrapper">
    <v-header/>
    <v-bottom-nav/>
    </div>
</template>


<script>
import vHeader from './layouts/v-header.vue'
import vBottomNav from './layouts/v-bottom-nav.vue'

    export default{
        name:"v-main-wrapper",
        components:{
            vHeader,
            vBottomNav
        },
        props:{},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped>

</style>
