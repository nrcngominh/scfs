import LoginService from '@/services/login'
import AuthService from '@/services/auth'

export default {
  namespaced: true,
  state: {
    loggedIn: false,
  },
  mutations: {
    login(state) {
      state.loggedIn = true
    }
  },
  actions: {
    async login({ commit }, loginData) {
      await LoginService.customer(loginData)
      commit('login')
    },
    async auth({ commit }) {
      if (await AuthService.customer()) {
        commit('login')
      }
    }
  }
}