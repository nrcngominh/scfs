import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
