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

export default {
  findById,
  findByIds,
  findAll
}