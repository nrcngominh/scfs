import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {library} from "@fortawesome/fontawesome-svg-core";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
