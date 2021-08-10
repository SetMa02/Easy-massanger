import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/store"
import router from "./router/router";
import 'material-design-icons-iconfont'
import './assets/Styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
