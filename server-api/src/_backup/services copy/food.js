import FoodRepo from '@repository/food'


const getAll = () => {
  return FoodRepo.findAll()
}

const create = async (name, price, description) => {
  return FoodRepo.create(name, price, description)
}

const update = async (food) => {
  await FoodRepo.update(food)
}

const updateImage = async (_id, img) => {
  return await FoodRepo.updateImage(_id, img)
}

const removeById = async (id) => {
  await FoodRepo.removeById(id)
}

export default {
  getAll,
  create,
  update,
  updateImage,
  removeById
}
