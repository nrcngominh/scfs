/**
 * Auth
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
const auth = async (req, res) => {
  res.status(200).send({
    message: 'Success'
  })
}

export default {
  auth
}