import CategoryModel from '@/models/category'

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
