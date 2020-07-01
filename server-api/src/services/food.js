import FoodRepo from '@repository/food'

/**
 * Get all foods
 */
const getAll = async () => {
  return await FoodRepo.findAll()
}

export default {
  getAll
}
