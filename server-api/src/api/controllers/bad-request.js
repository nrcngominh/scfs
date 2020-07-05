/**
 * Response bad requst
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const response = async (req, res) => {
  res.status(404).send({
    message: 'Bad request'
  })
}

export default {
  response
}