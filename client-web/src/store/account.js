const resetModalTabs = (state) => {
  state.loginTab = false
  state.registerTab = false
}

const openModal = (state) => {
  resetModalTabs(state)
  state.active = true
}

const closeModal = (state) => {
  resetModalTabs(state)
  state.active = false
}

export default {
  namespaced: true,
  state: {
    loggedIn: false,
  },
  modules: {
    modal: {
      namespaced: true,
      state: {
        active: false,
        loginTab: false,
        registerTab: false,
      },
      mutations: {
        openLoginTab(state) {
          openModal(state)
          state.loginTab = true
        },
        openRegisterTab(state) {
          openModal(state)
          state.registerTab = true
        },
        close(state) {
          closeModal(state)
        }
      }
    }
  }
}