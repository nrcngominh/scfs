import Router from 'express'
import CategoryController from '@controller/category'

const CategoryRouter = Router()

CategoryRouter.get('/', CategoryController.getAll)

export default CategoryRouter