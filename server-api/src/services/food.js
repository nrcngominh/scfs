import FoodRepo from '@/repositories/food'

/**
 * Get all foods
 */
const getAll = async () => {
  return await FoodRepo.findAll()
}

export default {
  getAll
}
