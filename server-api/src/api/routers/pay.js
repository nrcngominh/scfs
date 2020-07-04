import Router from 'express'
import PayController from '@controller/pay'

const PayRouter = Router()

PayRouter.post('/qr', PayController.qrCode)
PayRouter.post('/app', PayController.app)

export default PayRouter

