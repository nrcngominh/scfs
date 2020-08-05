import mongoose from 'mongoose'

const FavoriteSchema = mongoose.Schema({
  customerId: { type: String, unique: true, required: true },
  foods:
    [
      { type: String, required: true }
    ]
})

const FavoriteModel = mongoose.model('Favorite', FavoriteSchema, 'favorite')

export default FavoriteModel
