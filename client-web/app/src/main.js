import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App'
import VueQrCodeComponent from 'vue-qrcode-component'

Vue.config.productionTip = false;

// Import QR Code component
Vue.component('qr-code', VueQrCodeComponent)

// Import Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF, faTwitter, faGithub, faLinkedin
} from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faTwitter, faGithub, faLinkedin)

// Register Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Import styles
import './assets/scss/index.scss'

// axios settings
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_DOMAIN

// Cookie settings
Vue.use(VueCookies)
Vue.$cookies.config('1d')

// Initialize vuex and vue-router
import store from './store'
import router from './router'

// Start application
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')