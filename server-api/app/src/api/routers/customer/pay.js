import Router from 'express'
import PayController from '@/api/controllers/pay'
import AuthMiddleware from '@/api/middlewares/auth'

const PayRouter = Router()

PayRouter.post('/qr', AuthMiddleware.customer, PayController.qrCode)
PayRouter.post('/qr-machine', PayController.qrCodeAnonymous)
PayRouter.post('/app', PayController.app)

export default PayRouter