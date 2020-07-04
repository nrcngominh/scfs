export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: {
    addToCartSync(state, food) {
      state.cart.push({
        food: food,
        quantity: 1,
        subTotal: food.price
      })
      console.log(state.cart)
    }
  },
  actions: {
    addToCart({ commit }, food) {
      commit('addToCartSync', food)
    }
  }
}