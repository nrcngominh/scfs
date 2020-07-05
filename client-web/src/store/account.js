import AccountModal from './account-modal'
import AccountService from '@/services/account'

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
      AccountService.login(loginData)
      commit('login')
    },
    async auth({ commit }) {
      if (await AccountService.auth()) {
        commit('login')
      }
    }
  },
  modules: {
    modal: AccountModal
  }
}