import CartRepo from '@/repositories/cart'
import FoodRepo from '@/repositories/food'

const get = async (customerId) => {
  const cart = await CartRepo.findById(customerId)
  const foodIds = cart.items.map(item => item.foodId)
  const foods = await FoodRepo.findByIds(foodIds)
  const processedCart = foods.map((food, i) => ({
    food: food,
    quantity: cart.items[i].quantity
  }))
  return processedCart
}

const update = async (customerId, cart) => {
  const processedCart = cart.map(item => {
    return {
      foodId: item.food._id,
      quantity: item.quantity
    }
  })

  await CartRepo.update(customerId, processedCart)
}

export default {
  get,
  update
}