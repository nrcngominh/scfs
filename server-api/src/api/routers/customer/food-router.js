import Router from 'express'
import FoodService from '../../../services/food-service'

const FoodRouter = Router()

/*
 * Handle create new food
 */
FoodRouter.post('/', async (req, res) => {
  try {
    const newFood = await FoodService.create(req.body.name, req.body.price, req.body.description)
    res.status(201).send({
      message: 'Success',
      _id: newFood._id
    })
  }
  catch (error) {
    res.status(409).send({
      message: 'Failed'
    })
  }
})

/*
 * Handle get all foods
 */
FoodRouter.get('/', async (req, res) => {
  const foods = await FoodService.getAllAndGroupByCategory()
  res.status(200).send(foods)
})

/*
 * Handle update food
 */
FoodRouter.put('/', async (req, res) => {
  try {
    const foods = await FoodService.update({
      _id: req.body._id,
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    })
    res.status(202).send(foods)
  }
  catch (error) {
    res.status(400).send({
      message: "Failed"
    })
  }
})

/*
 * Handle delete food by id
 */
FoodRouter.delete('/', async (req, res) => {
  console.log(req.body)
  await FoodService.removeById(req.body._id)
  res.status(204).send({
    message: 'Sucess'
  })
})

/*
 * Handle get all foods
 */
FoodRouter.get('/machine', async (req, res) => {
  const foods = await FoodService.getAll()
  res.status(200).send({
    foods: foods
  })
})

export default FoodRouter
