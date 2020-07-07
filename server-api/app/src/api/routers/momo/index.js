import Router from 'express'
import LoggerMiddleware from '@/api/middlewares/logger'
import MomoController from '@/api/controllers/momo'

const MomoRouter = Router()

MomoRouter.post('*', LoggerMiddleware.log)

MomoRouter.post('/notify/qr', MomoController.notifyQr)

export default MomoRouter

