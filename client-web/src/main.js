import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import VueQrCodeComponent from 'vue-qrcode-component'

Vue.config.productionTip = false;
Vue.use(VueCookies)
Vue.$cookies.config('1d')

import './assets/scss/index.scss'
Vue.component('qr-code', VueQrCodeComponent)

import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN
Vue.prototype.$http = axios

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO(process.env.VUE_APP_DOMAIN),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

import store from './store'
import router from './router'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')