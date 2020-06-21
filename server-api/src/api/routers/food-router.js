import Router from 'express'
import FoodService from '../../services/food-service'

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
 * Handle delete food by id
 */
FoodRouter.delete('/', async (req, res) => {
  await FoodService.removeById(req.body.id)
  res.status(204).send({
    message: 'Sucess'
  })
})

export default FoodRouter
