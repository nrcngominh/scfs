import Router from 'express'
import RegisterValidator from '@/api/validators/register'
import RegisterController from '@/api/controllers/register'

const RegisterRouter = Router()

// RegisterRouter.post('*', RegisterValidator.rules, RegisterValidator.validator)

RegisterRouter.post('/customer', RegisterController.customer)


export default RegisterRouter