import Router from 'express'
import CartRepo from '../../repositories/cart-repository'
import { registerCustomer } from '../../services/account-service'

const RegisterRouter = Router()

RegisterRouter.post('/', async (req, res) => {
  console.log(req.body)
  const account = await registerCustomer(req.body.email, req.body.password, req.body.fullName, req.body.phoneNumber)
  await CartRepo.create(account._id)
  res.status(201).send({
    message: 'Success'
  })
})

export default RegisterRouter
