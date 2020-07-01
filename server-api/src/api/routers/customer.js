import Router from 'express'
import LoginValidator from '@validator/login'
import RegisterValidator from '@validator/register'
import { customerLogin } from '@controller/login'
import { customerRegister } from '@controller/register'

const CustomerRouter = Router()

CustomerRouter.post('/login',
  LoginValidator.rules, LoginValidator.validator, customerLogin)

CustomerRouter.post('/register',
  RegisterValidator.rules, RegisterValidator.validator, customerRegister)

export default CustomerRouter