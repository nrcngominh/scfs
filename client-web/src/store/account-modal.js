const resetModalTabs = (state) => {
  state.loginTab = false
  state.registerTab = false
}

const openModal = (state) => {
  resetModalTabs(state)
  document.querySelector("body").classList.add("modal-active");
  state.modalActive = true
}

const closeModal = (state) => {
  resetModalTabs(state)
  document.querySelector("body").classList.remove("modal-active");
  state.modalActive = false
}

export default {
  namespaced: true,
  state: {
    modalActive: false,
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