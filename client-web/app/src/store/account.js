import LoginService from '@/services/login'
import AuthService from '@/services/auth'
import Sockets from '@/sockets'

export default {
  namespaced: true,
  state: {
    customerLoggedIn: false,
  },
  mutations: {
    customerLogin(state) {
      state.customerLoggedIn = true
    },
    customerLogout(state) {
      state.customerLoggedIn = false
    }
  },
  actions: {
    async customerLogin({ commit }, loginData) {
      await LoginService.customer(loginData)
      Sockets.initialCustomerSocket(this)
      commit('customerLogin')
    },
    async customerAuth({ commit }) {
      const isAuth = await AuthService.customer()
      if (isAuth) {
        Sockets.initialCustomerSocket(this)
        commit('customerLogin')
      }
    },
    async customerLogout({ commit }) {
      LoginService.logout()
      Sockets.disconnect()
      commit('customerLogout')
    }
  }
}