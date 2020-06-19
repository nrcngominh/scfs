import Router from 'express'
import { registerCustomer } from '../../services/account-service'

const RegisterRouter = Router()

RegisterRouter.post('/', async (req, res) => {
  await registerCustomer(req.body.email, req.body.password)
  res.status(201).send({
    message: 'Success'
  })
})

export default RegisterRouter
