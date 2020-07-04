import Router from 'express'
import FoodController from '@controller/food'

const FoodRouter = Router()

FoodRouter.get('/', FoodController.getAllFoods)

export default FoodRouter