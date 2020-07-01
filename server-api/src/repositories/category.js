import CategoryModel from '@model/category'

/**
 * Find all categories
 */
const findAll = () => {
  return CategoryModel.find()
    .select(' name')
}

export default {
  findAll
}
