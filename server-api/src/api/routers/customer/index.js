import Router from 'express'
import CartRouter from './cart'
import PayRouter from './pay'
import AuthMiddleware from '@/api/middlewares/auth'

const CustomerRouter = Router()

CustomerRouter.all('*', AuthMiddleware.customer)

CustomerRouter.use('/cart', CartRouter)
CustomerRouter.use('/pay', PayRouter)

export default CustomerRouter