import FoodModel from '../models/food-model'

export default {
  async add(name, price, description) {
    return await FoodModel.create({
      name: name,
      price: price,
      description: description
    })
  },
  async getAll() {
    return await FoodModel.find().select('-_id name price description')
  }
}