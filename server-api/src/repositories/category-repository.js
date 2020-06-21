import CategoryModel from '../models/category-model'

/*
 * Create new category
 */
const create = async(name) => {
  return CategoryModel.create({
    name: name
  })
}

/*
 * Find all categories
 */
const findAll = async () => {
  return CategoryModel.find()
    .select(' name')
}

/*
 * Remove food by id in database
 */
const removeById = async (id) => {
  return CategoryModel.deleteOne({
    _id: id
  })
}

export default {
  create,
  findAll,
  removeById
}
