import mongoose from 'mongoose'

const FoodSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId: { type: String, required: true },
  img: { type: String, required: true },
  description: String,
  tags: { type: [String] }
})

const FoodModel = mongoose.model('Food', FoodSchema, 'food')

export default FoodModel
