import Router from 'express'
import { registerCustomer } from '../../services/account-service'

const RegisterRouter = Router()

RegisterRouter.post('/', async (req, res) => {
  console.log(req.body)
  await registerCustomer(req.body.email, req.body.password, req.body.fullName, req.body.phoneNumber)
  res.status(201).send({
    message: 'Success'
  })
})

export default RegisterRouter
