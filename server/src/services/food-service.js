import FoodModel from '../models/food-model'

export default {
  async add(name, price, description) {
    const response = await FoodModel.create({
      name: name,
      price: price,
      description: description
    })
    return response._id || false
  },
  async getAll() {
    console.log('Getting food')
    return await FoodModel.find().select(' name price description')
  },
  async delete(id) {
      return await FoodModel.deleteOne({
          _id: id
      })
  }
}
