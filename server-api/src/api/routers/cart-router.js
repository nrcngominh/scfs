import Router from 'express'
import CartRepo from '../../repositories/cart-repository'

const CartRouter = Router()

/*
 * Get cart info
 */
CartRouter.get('/', async(req, res) => {
    try {
        const cart = await CartRepo.findById()
        res.status(200).send(cart.items)
    } catch (error) {
        res.status('404').send({
            message: "Failed"
        })
    }
})

/*
 * Post cart info
 */
CartRouter.post('/', async(req, res) => {
    try {
        console.log(req.body)
        const customerId = "5ee0bf66dbc5342856486edc"
        await CartRepo.update(customerId, req.body)
        res.status(201).send({
            message: "Success"
        })
    } catch (error) {
        console.log(error)
        res.status('400').send({
            message: "Failed"
        })
    }
})

export default CartRouter