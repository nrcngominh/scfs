import MomoService from '@/services/momo'

/**
 * Handle QR code notification from MOMO
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const notifyQr = (req, res) => {
  try {
    const resData = MomoService.notifyQrCodeReponse(req.body)
    res.status(200).send(resData)
  }
  catch (error) {
    res.status(500).send({
      message: 'Failed'
    })
  }
  const io = req.app.get('socket.io')
  io.emit("MOMO", req.body)
}

export default {
  notifyQr
}