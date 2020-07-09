import PayService from '@/services/pay'

/**
 * Handle QR Code pay
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const qrCode = async (req, res) => {
  const cart = req.body.cart
  const couponId = req.body.couponId
  const account = req.decoded.account
  const bill = await PayService.createBill(cart, couponId, account)
  res.status(201).send(bill)
}

/**
 * Handle App-In-App pay
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const app = (req, res) => {
  res.status(404).send({
    message: 'Failed'
  })
}

export default {
  qrCode,
  app
}