import Router from 'express'
import AuthMiddleware from '@/api/middlewares/auth'
import AuthController from '@/api/controllers/auth'

const AuthRouter = Router()

AuthRouter.post('/customer', AuthMiddleware.customer, AuthController.auth)

AuthRouter.post('/customer/google', AuthController.authGoogle)

export default AuthRouter