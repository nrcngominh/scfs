export default {
  namespaced: true,
  state: {
    transparentNav: true,
    dropdown: false
  },
  mutations: {
    scroll: (state) => {
      // Scroll down
      if (window.scrollY !== 0) {
        state.transparentNav = false
        return
      }
      // Scroll top
      if (!state.dropdown) {
        state.transparentNav = true
      }
    },
    toggleDropdown: (state) => {
      // Open dropdown
      if (!state.dropdown) {
        state.dropdown = true
        state.transparentNav = false
        return
      }
      // Close dropdown
      state.dropdown = false
      if (window.scrollY === 0) {
        state.transparentNav = true
      }
    }
  }
}