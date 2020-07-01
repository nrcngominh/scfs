import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import VueQrCodeComponent from 'vue-qrcode-component'

Vue.config.productionTip = false;

// Import QR Code component
Vue.component('qr-code', VueQrCodeComponent)

// Import Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faTwitter, faGithub, faLinkedin)

// Register Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Import assets
import './assets/scss/index.scss'

// axios settings
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN
Vue.prototype.$http = axios

// Cookie settings
Vue.use(VueCookies)
Vue.$cookies.config('1d')

// Initialize socket-client.io
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO(process.env.VUE_APP_DOMAIN),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

// Initialize vuex and vue-router
import store from './store'
import router from './router'

// Start application
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')