import CategoryRepo from '../../../repositories/category-repository'
import Router from 'express'

const CategoryRouter = Router()

/*
 * Handle create new category
 */
CategoryRouter.post('/', async (req, res) => {
  try {
    const newCategory = await CategoryRepo.create(req.body.name)
    res.status(201).send({
      message: 'Success',
      _id: newCategory._id
    })
  }
  catch (error) {
    res.status(409).send({
      message: 'Failed'
    })
  }
})

/*
 * Handle delete food by id
 */
CategoryRouter.delete('/', async (req, res) => {
  await Category.removeById(req.body.id)
  res.status(204).send({
    message: 'Sucess'
  })
})

export default CategoryRouter
