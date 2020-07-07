import Router from 'express'
import LoginValidator from '@/api/validators/login'
import LoginController from '@/api/controllers/login'

const LoginRouter = Router()

LoginRouter.post('*', LoginValidator.rules, LoginValidator.validator)

LoginRouter.post('/customer', LoginController.customer)
LoginRouter.post('/admin', LoginController.admin)
LoginRouter.post('/vendor', LoginController.vendor)


export default LoginRouter