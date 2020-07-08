import { getAllFoods } from '@/api/customer/food'
import { getAllCategories } from '@/api/customer/category'
import { getField, updateField } from 'vuex-map-fields'

const filterCategory = (state, food) => {
  let valid = false
  state.allCategories.filter(item => item.checked === true)
    .forEach(category => {
      if (category._id == food.categoryId) {
        valid = true
      }
    })
  return valid
}

const filterMoney = (state, food) => {
  const min = Number(state.moneyMinValue, 10)
  const max = Number(state.moneyMaxValue, 10)
  if (!min || !max || min < 0 || min > max) {
    return true
  }
  return food.price >= min * 1000 && food.price <= max * 1000
}

const filterName = (state, food) => {
  if (!state.searchPattern) {
    return true
  }
  const regexMatchName = new RegExp(state.searchPattern, "i");
  return regexMatchName.test(food.name)
}

export default {
  namespaced: true,
  state: {
    allFoods: [],
    allCategories: [],
    searchPattern: '',
    moneyMinValue: 5,
    moneyMaxValue: 100
  },
  getters: {
    getField,
    getFoodsFiltered(state) {
      return state.allFoods.filter(food => {
        const status = filterCategory(state, food)
          && filterMoney(state, food)
          && filterName(state, food)
        return status
      })
    }
  },
  mutations: {
    updateField,
    setAllFoods(state, allFoods) {
      state.allFoods = allFoods
    },
    setAllCategories(state, allCategories) {
      state.allCategories = allCategories
    }
  },
  actions: {
    async fetchAllFoods({ commit }) {
      const allFoods = (await getAllFoods()).data
      const allCategories = (await getAllCategories()).data
      allCategories.forEach(category => category.checked = true)
      commit('setAllFoods', allFoods)
      commit('setAllCategories', allCategories)
    }
  }
}