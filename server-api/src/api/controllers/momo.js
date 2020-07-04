import MomoService from '@service/momo'

/**
 * Handle QR code notification from MOMO
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const notifyQrCode = (req, res) => {
  const resData = MomoService.notifyQrCode(req.body)
  res.status(200).send(resData)
}

export default {
  notifyQrCode
}