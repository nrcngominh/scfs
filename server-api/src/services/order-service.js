import FoodRepo from '../repositories/food-repository'

const getTotalMoney = async (cart) => {
  let totalMoney = 0
  const foods = await FoodRepo.findByIds(cart.map(item => item.foodId))

  cart.forEach(item => {
    totalMoney += foods.find(food => food._id == item.foodId).price
                    * item.quantity
  })
  return totalMoney
}

export default {
  getTotalMoney
}