const refresh = (state) => {
  if (state.landingPage && state.isTop && !state.dropdown) {
    state.transparentNav = true
  }
  else {
    state.transparentNav = false
  }
}

export default {
  namespaced: true,
  state: {
    landingPage: false,
    isTop: true,
    transparentNav: false,
    dropdown: false
  },
  mutations: {
    enterLandingPage(state) {
      state.landingPage = true
      refresh(state)
    },
    exitLandingPage(state) {
      state.landingPage = false
      refresh(state)
    },
    scroll(state, isTop) {
      state.isTop = isTop
      refresh(state)
    },
    toggleDropdown(state) {
      state.dropdown = !state.dropdown
      refresh(state)
    }
  }
}