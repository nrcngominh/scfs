import Router from 'express'
import BaseSocket from '../../sockets'

const MomoRouter = Router()

MomoRouter.post('/', async (req, res) => {
  res.send({
    status: 'success',
  })
  BaseSocket.getIo().emit('payment_success', null)
})

export default MomoRouter
