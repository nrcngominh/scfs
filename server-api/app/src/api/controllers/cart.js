import CartService from '@/services/cart'

/**
 * Get cart
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const get = async (req, res) => {
  try {
    const customerId = req.decoded.account._id
    const cart = await CartService.get(customerId)
    res.status(200).send(cart)
  }
  catch (error) {
    res.status(400).send({
      message: 'Failed'
    })
  }
}

/**
 * Update cart
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const update = async (req, res) => {
  try {
    const customerId = req.decoded.account._id
    const cart = req.body
    await CartService.update(customerId, cart)
    res.status(200).send({
      message: 'Success'
    })
  }
  catch (error) {
    res.status(400).send({
      message: 'Failed'
    })
  }
}

export default {
  get,
  update
}