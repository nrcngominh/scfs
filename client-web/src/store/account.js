export default {
  namespaced: true,
  state: {
    loggedIn: false
  },
  mutations: {
    login(state) {
      state.loggedIn = true
    }
  }
}