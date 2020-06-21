import FoodModel from '../models/food-model'

/*
 * Create new food in databse
 */
const create = async (name, price, description, category, img) => {
  return FoodModel.create({
    name: name,
    price: price,
    description: description,
    category: category,
    img: img
  })
}

/*
 * Find all foods in database
 */
const findAll = async () => {
  return FoodModel.find()
    .select(' name price description categoryId img')
}

/*
 * Remove food by id in database
 */
const removeById = async (id) => {
  return FoodModel.deleteOne({
    _id: id
  })
}

export default {
  create,
  findAll,
  removeById
}
