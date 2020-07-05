import MomoService from '@/services/momo'

/**
 * Handle QR code notification from MOMO
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const notifyQr = (req, res) => {
  try {
    const resData = MomoService.notifyQrCode(req.body)
    res.status(200).send(resData)
  }
  catch (error) {
    res.status(500).send({
      message: 'Failed'
    })
  }
}

export default {
  notifyQr
}