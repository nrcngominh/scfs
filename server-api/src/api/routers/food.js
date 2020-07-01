import Router from 'express'
import { getAllFoods } from '@controller/food'

const FoodRouter = Router()

FoodRouter.get('/', getAllFoods)

export default FoodRouter