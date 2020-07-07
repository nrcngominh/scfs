import MomoService from '@/services/momo'

/**
 * Handle QR Code pay
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const qrCode = (req, res) => {
  const billId = "B696969"
  const rawQrCode = MomoService.generatePayQrCode(10000, billId)
  res.status(201).send({
    billId: billId,
    qrCode: rawQrCode
  })
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