import Router from 'express'
import FoodService from '../../services/food-service'

const FoodRouter = Router()

FoodRouter.post('/', async (req, res) => {
  console.log(req.body)
  const newId = await FoodService.add(req.body.name, req.body.price, req.body.description)
  if (newId) {
    res.send({
      status: 'success',
      _id: newId
    })
  } else {
    res.send({
      status: 'failed'
    })
  }
})

FoodRouter.get('/', async (req, res) => {
  const response = await FoodService.getAll()
  res.send({
    foods: response
  })
})

FoodRouter.delete('/', async (req, res) => {
  console.log(req.body.id)
  const isSuccess = await FoodService.delete(req.body.id)
  res.send({
    status: isSuccess ? 'success' : 'failed'
  })
})

export default FoodRouter
