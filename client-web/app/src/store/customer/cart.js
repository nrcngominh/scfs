import { getField, updateField } from 'vuex-map-fields'
import { getCart, updateCart } from '@/api/customer/cart'
import { payQrCode } from '@/api/customer/pay'
import CouponService from '@/services/coupon'

const increaseQuantity = (item) => {
  item.quantity++;
  item.subTotal += item.food.price
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    item.subTotal -= item.food.price
  }
}

const addFoodToCart = (cart, food) => {
  const item = cart.find(item => {
    return item.food._id == food._id
  })
  item ? increaseQuantity(item) :
    cart.push({
      food: food,
      quantity: 1,
      subTotal: food.price
    })
}

const setMoney = (state) => {
  state.subTotal = state.cart.reduce((a, b) => a + b.subTotal, 0)
  const discountValue = Number(state.discount)
  if (discountValue) {
    state.total = state.subTotal - discountValue
    return
  }
  const discountPercent = Number(state.discount.slice(0, -1))
  if (discountPercent) {
    state.total = state.subTotal * (100 - discountPercent) / 100.0
    return
  }
  state.total = state.subTotal
}

export default {
  namespaced: true,
  state: {
    cart: [],
    subTotal: 0,
    couponId: "",
    coupon: "",
    discount: '',
    billId: "",
    qrCode: "",
    pendingQrCode: false,
    total: 0
  },
  getters: {
    getField
  },
  mutations: {
    updateField,
    setCart(state, cart) {
      state.cart = cart
      setMoney(state)
    },
    addToCartSync(state, food) {
      addFoodToCart(state.cart, food)
      setMoney(state)
    },
    removeFromCartSync(state, itemToRemove) {
      state.cart = state.cart.filter(item => item !== itemToRemove)
      setMoney(state)
    },
    increaseQuantitySync(state, item) {
      increaseQuantity(item)
      setMoney(state)
    },
    decreaseQuantitySync(state, item) {
      decreaseQuantity(item)
      setMoney(state)
    },
    applyCouponSync(state, coupon) {
      state.discount = coupon.discount
      state.couponId = coupon._id
      console.log(state)
      setMoney(state)
    },
    waitForPayment(state, payload) {
      state.billId = payload.billId
      state.qrCode = payload.qrCode
      state.pendingQrCode = true
    }
  },
  actions: {
    async fetchCart({ commit }) {
      const cart = (await getCart()).data
      commit('setCart', cart.map(item => {
        item.subTotal = item.food.price * item.quantity
        return item
      }))
    },
    async addToCart({ commit, state }, food) {
      commit('addToCartSync', food)
      await updateCart(state.cart)
    },
    async removeFromCart({ commit, state }, food) {
      commit('removeFromCartSync', food)
      await updateCart(state.cart)
    },
    async increaseQuantity({ commit, state }, food) {
      commit('increaseQuantitySync', food)
      await updateCart(state.cart)
    },
    async decreaseQuantity({ commit, state }, food) {
      commit('decreaseQuantitySync', food)
      await updateCart(state.cart)
    },
    async applyCoupon({ commit, state }) {
      const couponObject = await CouponService.check(state.coupon)
      if (couponObject) {
        commit('applyCouponSync', couponObject)
      }
    },
    async payQr({ commit, state }) {
      const res = await payQrCode(state.cart, state.couponId)
      commit("waitForPayment", res.data)
    }
  }
}