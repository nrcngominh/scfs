import FavoriteModel from '@/models/favorite'

/**
 * Create cart by customer ID
 * @param {String} customerId
 */
const create = (customerId) => {
  return FavoriteModel.create({
    customerId: customerId,
    foods: []
  })
}

/**
 * Find cart by customer ID
 * @param {String} customerId 
 */
const findById = async (customerId) => {
  let data = await FavoriteModel.findOne({
    customerId: customerId
  })

  if (!data) {
    await create(customerId)
  }
  data = await FavoriteModel.findOne({
    customerId: customerId
  })
  return data
}

/**
 * Update cart by customer ID
 * @param {String} customerId 
 * @param {Array<Object>} favorite
 */
const update = async (customerId, favorite) => {
  return await FavoriteModel.findOneAndUpdate({ customerId: customerId }, {
    foods: favorite
  })
}

export default {
  create,
  findById,
  update
}
