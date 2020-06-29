import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
import VueQrCodeComponent from 'vue-qrcode-component'
import axios from 'axios'

import './assets/scss/index.scss'


axios.defaults.baseURL = process.env.VUE_APP_DOMAIN
Vue.prototype.$http = axios

import router from './router'

//Add fontawesome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebookF, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import '@fortawesome/fontawesome-free/css/all.css'
// Add the specific imported icons
// library.add(faFacebookF, faTwitter, faGithub, faLinkedin)

// // Enable the FontAwesomeIcon component globally
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('qr-code', VueQrCodeComponent)
Vue.config.productionTip = false;

Vue.use(VueCookies)
Vue.$cookies.config('1d')

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO(process.env.VUE_APP_DOMAIN),
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}))

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
