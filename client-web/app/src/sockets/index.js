import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'


const initialCustomerSocket = (store) => Vue.use(new VueSocketIO({
  debug: process.env.NODE_ENV === 'development',
  connection: SocketIO(process.env.VUE_APP_DOMAIN),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

const disconnect = () => {
  Vue.prototype.$socket.disconnect()
}

export default {
  initialCustomerSocket,
  disconnect
}