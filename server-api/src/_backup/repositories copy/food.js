import FoodModel from '../../models/food'

const findAll = async () => {
  return FoodModel.find()
    .select(' name price description categoryId img')
}

const findById = async (id) => {
  return FoodModel.findById(id)
    .select(' name price description categoryId img')
}

const findByIds = async (ids) => {
  return FoodModel.find()
    .where('_id').in(ids)
    .select(' name price description categoryId img')
}

export default {
  findById,
  findByIds,
  findAll
}

// const create = async (name, price, description, category, img) => {
//   return FoodModel.create({
//     name: name,
//     price: price,
//     description: description,
//     category: category,
//     img: img
//   })
// }
// 
// const update = async (food) => {
//   return FoodModel.findOneAndUpdate({ _id: food._id }, {
//     name: food.name,
//     price: food.price,
//     description: food.description
//   })
// }

// const updateImage = async (_id, img) => {
//   return FoodModel.findOneAndUpdate({ _id: _id }, {
//     img: img
//   }, {
//     new: true
//   })
// }

// const removeById = async (id) => {
//   return FoodModel.deleteOne({
//     _id: id
//   })
// }