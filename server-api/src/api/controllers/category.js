import CategoryService from '@service/category'

/**
 * Get all categories
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getAll = async (req, res) => {
  try {
    const categories = await CategoryService.getAll()
    res.status(200).send(categories)
  }
  catch (error) {
    res.status(500).send({
      message: 'Failed'
    })
  }
}

export default {
  getAll
}