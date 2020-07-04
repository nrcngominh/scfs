import Router from 'express'
import LoginValidator from '@validator/login'
import RegisterValidator from '@validator/register'
import AuthMiddleware from '@middleware/auth'
import AuthController from '@controller/auth'
import LoginController from '@controller/login'
import RegisterController from '@controller/register'

const CustomerRouter = Router()

CustomerRouter.post('/login',
  LoginValidator.rules, LoginValidator.validator,
  LoginController.customer)

CustomerRouter.post('/register',
  RegisterValidator.rules, RegisterValidator.validator,
  RegisterController.customer)

CustomerRouter.post('/auth', AuthMiddleware.customer, AuthController.auth)

export default CustomerRouter