import mongoose from 'mongoose'

const FoodSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  img: String
})
const FoodModel = mongoose.model('Food', FoodSchema, 'food')

export default FoodModel
