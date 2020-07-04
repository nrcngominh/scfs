import MomoService from '@service/momo'

/**
 * Handle QR Code pay
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const qrCode = (req, res) => {
  const rawQrCode = MomoService.payQrCode(req.body.amount, req.body.billId)
  res.status(201).send(rawQrCode)
}

/**
 * Handle App-In-App pay
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const app = (req, res) => {
}

export default {
  qrCode,
  app
}