import FoodRepo from '../repositories/food-repository'
import CategoryRepo from '../repositories/category-repository'
import url from 'url'

/*
 * Create new food
 */
const create = async (name, price, description) => {
  return FoodRepo.create(name, price, description)
}

/*
 * Get all foods and group by category
 */
const getAllAndGroupByCategory = async () => {
  const [ foods, categories ] = [
    await FoodRepo.findAll(),
    await CategoryRepo.findAll()
  ]

  foods.forEach(food => {
    food.img = url.resolve(process.env.DOMAIN, food.img)
  })

  return Array.from(categories, category => {
    const foodsGrouped = foods.filter(food => food.categoryId == category._id)
    return {
      category: category.name,
      foods: foodsGrouped
    }
  })
}

/*
 * Update
 */

const update = async(food) => {
  await FoodRepo.update(food)
}

/*
 * Delete food by id
 */
const removeById = async (id) => {
  await FoodRepo.removeById(id)
}

export default {
  create,
  getAllAndGroupByCategory,
  update,
  removeById
}
