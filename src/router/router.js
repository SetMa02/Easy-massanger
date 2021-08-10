import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import vContactList from '../components/Contacts/v-contact-list'

let router = new Router({
    routes:[
        {
        path:'/',
        name: 'contacts',
        component: vContactList
        }
    ]
})

export default router;