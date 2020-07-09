import mongoose from 'mongoose'

const CategorySchema = mongoose.Schema({
  name: { type: String, required: true }
})

const CategoryModel = mongoose.model('Category', CategorySchema, 'category')

export default CategoryModel
