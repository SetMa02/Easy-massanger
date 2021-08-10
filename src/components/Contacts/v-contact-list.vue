<template>
    <div class="v-contact-list">
    <contact-user
    v-for="contact in contact"
    :key="contact.id"
    :contact_data = "contact"
    />
    </div>
</template>

<script>
import contactUser from './v-contact-user'
import {mapActions, mapState} from 'vuex'

export default {
   name: "v-contact-list",
   components:{
       contactUser
   },
   computed: {
       ...mapState([
           'contacts'
       ])
   },
   methods:{
       ...mapActions([
           'FETCH_CONTACTS'
       ])
   },
    mounted() {
      this.FETCH_CONTACTS()
    }
}
</script>

<style>

</style>
