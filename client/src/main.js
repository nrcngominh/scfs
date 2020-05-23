import Vue from 'vue'
import App from './App.vue'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {library} from "@fortawesome/fontawesome-svg-core";


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
