import Router from 'express'
import BaseSocket from '../../sockets'

const MomoRouter = Router()

MomoRouter.post('/', async (req, res) => {
  res.status(200).send({
    message: 'Success'
  })
  BaseSocket.getIo().emit('payment_success', null)
})

export default MomoRouter
