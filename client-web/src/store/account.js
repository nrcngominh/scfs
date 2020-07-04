import AccountModal from './account-modal'
import { login } from '@/services/account'
import { auth } from '@/services/account'

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
      login(loginData)
      commit('login')
    },
    async auth({ commit }) {
      if (await auth()) {
        commit('login')
      }
    }
  },
  modules: {
    modal: AccountModal
  }
}