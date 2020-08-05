import Router from 'express'
import CartRouter from './cart'
import PayRouter from './pay'
import FavoriteRouter from './favorite'
import TransactionRouter from './transaction'
import AuthMiddleware from '@/api/middlewares/auth'

const CustomerRouter = Router()

CustomerRouter.use('/cart', AuthMiddleware.customer, CartRouter)
CustomerRouter.use('/pay', PayRouter)
CustomerRouter.use('/favorite', FavoriteRouter)
CustomerRouter.use('/transaction', TransactionRouter)

export default CustomerRouter