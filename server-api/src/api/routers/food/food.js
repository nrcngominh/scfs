import Router from 'express'
import FoodController from '@/api/controllers/food'

const FoodRouter = Router()

FoodRouter.get('/', FoodController.getAllFoods)

export default FoodRouter