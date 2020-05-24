import Router from 'express'
import FoodService from '../../services/food-service'

const FoodRouter = Router()

FoodRouter.post('/', async (req, res) => {
  console.log(req.body)
  const isSuccess = await FoodService.add(req.body.name, req.body.price, req.body.description)
  res.send({
    status: isSuccess ? 'success' : 'failed'
  })
})

FoodRouter.get('/', async (req, res) => {
  const response = await FoodService.getAll()
  res.send({
    foods: response
  })
})

export default FoodRouter
