import Router from 'express'
import AuthMiddleware from '../middlewares/auth-middleware'
import AccountRepo from '../../repositories/account'
import CartRepo from '../../repositories/cart'

const CartRouter = Router()

CartRouter.all('/', AuthMiddleware)

/*
 * Get cart info
 */
CartRouter.get('/', async (req, res) => {
  const account = await AccountRepo.findByEmail(req.jwtDecodedData.email)
  try {
    const cart = await CartRepo.findById(account._id)
    res.status(200).send(cart.items)
  }
  catch (error) {
    res.status('404').send({
      message: "Failed"
    })
  }
})

/*
 * Post cart info
 */
CartRouter.post('/', async (req, res) => {
  try {
    const account = await AccountRepo.findByEmail(req.jwtDecodedData.email)
    await CartRepo.update(account._id, req.body)
    res.status(201).send({
      message: "Success"
    })
  }
  catch (error) {
    console.log(error)
    res.status('400').send({
      message: "Failed"
    })
  }
})

export default CartRouter