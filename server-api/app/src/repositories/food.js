import FoodModel from '@/models/food'

const findAll = () => {
  return FoodModel.find()
    .select(' name price description categoryId img')
}

const findById = (id) => {
  return FoodModel.findById(id)
    .select(' name price description categoryId img')
}

const findByIds = (ids) => {
  return FoodModel.find()
    .where('_id').in(ids)
    .select(' name price description categoryId img')
}

/*
 * Update
 */
const update = async (food) => {
  return FoodModel.findOneAndUpdate({ _id: food._id }, {
    name: food.name,
    price: food.price,
    description: food.description
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
  update,
  removeById,
  findById,
  findByIds,
  findAll
}