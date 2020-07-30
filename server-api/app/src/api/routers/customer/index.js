import Router from 'express'
import CartRouter from './cart'
import PayRouter from './pay'
import AuthMiddleware from '@/api/middlewares/auth'

const CustomerRouter = Router()

CustomerRouter.use('/cart', AuthMiddleware.customer, CartRouter)
CustomerRouter.use('/pay', PayRouter)

export default CustomerRouter