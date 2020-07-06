import Router from 'express'
import CartController from '@/api/controllers/cart'

const CartRouter = Router()

CartRouter.get('/', CartController.get)
CartRouter.put('/', CartController.update)

export default CartRouter

