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

const findByIds = async (ids) => {
  return FoodModel.find()
    .where('_id').in(ids)
    .select(' name price description categoryId img')
}

/*
 * Find all foods in database
 */
const findAll = async () => {
  return FoodModel.find()
    .select(' name price description categoryId img')
}

/*
 * Update
 */
const update = async (food) => {
  return FoodModel.findOneAndUpdate({_id: food._id }, {
    name: food.name,
    price: food.price,
    description: food.description
  })
}

/*
 * Update
 */
const updateImage = async (_id, img) => {
  return FoodModel.findOneAndUpdate({_id: _id }, {
    img: img
  }, {
    new: true
  })
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
  findByIds,
  findAll,
  update,
  updateImage,
  removeById
}
