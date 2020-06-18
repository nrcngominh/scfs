import Router from 'express'
import FoodRepo from '../../repositories/food-repository'

const FoodRouter = Router()

/*
 * Handle create new food
 */
FoodRouter.post('/', async (req, res) => {
  try {
    const newFood = await FoodRepo.create(req.body.name, req.body.price, req.body.description)
    if (newFood) {
      res.status(201).send({
        message: 'Success',
        _id: newFood._id
      })
    }    
  } catch (error) {
    res.status(409).send({
      message: 'Failed'
    })
  }
})

/*
 * Handle get all foods
 */
FoodRouter.get('/', async (req, res) => {
  const foods = await FoodRepo.findAll()
  res.status(200).send({
    foods: foods
  })
})


/*
 * Handle delete food by id
 */
FoodRouter.delete('/', async (req, res) => {
  await FoodRepo.removeById(req.body.id)
  res.status(204).send({
    message: 'Sucess'
  })
})

export default FoodRouter
