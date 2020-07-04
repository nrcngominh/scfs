import FoodService from '@service/food'

/**
 * Get all foods
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getAllFoods = async (req, res) => {
  try {
    const foods = await FoodService.getAll()
    res.status(200).send(foods)
  }
  catch (error) {
    res.status(500).send({
      message: 'Failed'
    })
  }
}

export default {
  getAllFoods
}