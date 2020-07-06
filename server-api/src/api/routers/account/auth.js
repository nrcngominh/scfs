import Router from 'express'
import AuthMiddleware from '@/api/middlewares/auth'
import AuthController from '@/api/controllers/auth'

const AuthRouter = Router()

AuthRouter.get('/customer', AuthMiddleware.customer, AuthController.auth)

AuthRouter.get('/customer/google', AuthController.authGoogle)

AuthRouter.get('/vendor', AuthMiddleware.vendor, AuthController.auth)

export default AuthRouter