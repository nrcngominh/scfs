import FoodService from '@/services/food'
import FoodRepo from '@/repositories/food'

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

const editFood = async (req, res) => {
  try {
    console.log(req.body)
    await FoodRepo.update(req.body)
    res.status(202).send({
      message: "Success"
    })
  }
  catch (error) {
    res.status(500).send({
      message: 'Failed'
    })
  }
}

const removeFood = async (req, res) => {
  try {
    const _id = req.body._id
    console.log(_id)
    await FoodRepo.removeById(_id)
    res.status(204).send({
      message: "Success"
    })
  }
  catch (error) {
    res.status(500).send({
      message: 'Failed'
    })
  }
}

export default {
  getAllFoods,
  editFood,
  removeFood
}