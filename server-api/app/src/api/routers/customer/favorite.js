import Router from 'express'
import AuthMiddleware from '@/api/middlewares/auth'
import FavRepo from '@/repositories/favorite'

const FavoriteRouter = Router()

FavoriteRouter.get('/', AuthMiddleware.customer, async (req, res) => {
  try {
    console.log("asfsdf")
    const customerId = req.decoded.account._id
    console.log(customerId)
    const favorite = await FavRepo.findById(customerId)
    console.log(favorite)
    res.status(200).send(favorite)
  }
  catch (error) {
    res.status(400).send({
      message: 'Failed'
    })
  }
})
FavoriteRouter.put('/', AuthMiddleware.customer, async (req, res) => {
  try {
    console.log(req.body)
    const customerId = req.decoded.account._id
    await FavRepo.update(customerId, req.body.foods)
    res.status(200).send({
      message: "Success"
    })
  }
  catch (error) {
    res.status(400).send({
      message: 'Failed'
    })
  }
})

export default FavoriteRouter

