import FoodService from '@/services/food'
import BaseSocket from '@/sockets'

/**
 * Get all foods
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const getAllFoods = async (req, res) => {
  const io = BaseSocket.getIO()
  console.log(io)
  try {
    const foods = await FoodService.getAll()
    res.status(200).send(foods)
    io.sockets.emit("SERVER_SAY_HI", { message: "asfsfs" })
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