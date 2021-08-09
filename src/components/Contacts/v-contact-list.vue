<template>

    <div class="v-contact-list">
    <contact-user/>
    </div>
</template>

<script>
import contactUser from './v-contact-user.vue'

export default {
   name: "v-contact-list",
   components:{
       contactUser
   },
   props: {},
   data(){
       return {}
   },
   computed: {}
}
</script>

<style scoped>

</style>
