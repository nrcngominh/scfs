import Vue from 'vue'
import App from './App.vue'
import router from './router'
//Add boostrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//Add fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
//Add jQuery

// import jQuery from 'jquery'
// window.jQuery = window.$ = jQuery

// Add the specific imported icons
library.add(faFacebookF, faTwitter, faGithub, faLinkedin)

// Enable the FontAwesomeIcon component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')