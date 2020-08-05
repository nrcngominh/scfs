import Router from 'express'
import FoodController from '@/api/controllers/food'

const FoodRouter = Router()

FoodRouter.get('/', FoodController.getAllFoods)
FoodRouter.put('/', FoodController.editFood)
FoodRouter.delete('/', FoodController.removeFood)

export default FoodRouter