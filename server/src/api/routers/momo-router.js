import Router from 'express'

const MomoRouter = Router()

MomoRouter.post('/', async (req, res) => {
  console.log(req.body);
  res.send({
      status: 'success',
  })
})

export default MomoRouter
