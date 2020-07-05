import Router from 'express'
import CategoryController from '@/api/controllers/category'

const CategoryRouter = Router()

CategoryRouter.get('/', CategoryController.getAll)

export default CategoryRouter