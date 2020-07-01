import mongoose from 'mongoose'

const CategorySchema = mongoose.Schema({
  name: String
})

const CategoryModel = mongoose.model('Category', CategorySchema, 'category')

export default CategoryModel
