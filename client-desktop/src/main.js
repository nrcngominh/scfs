import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import material design
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

// Import styles
import './assets/scss/index.scss'

// Import router and store
import router from './router'
import store from './store'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
