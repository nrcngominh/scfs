import Router from 'express'
import multer from 'multer'
import path from 'path'
import url from 'url'
import FoodService from '../../../services/food-service'

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.IMAGES_DIRECTORY)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({ storage: storage })

const UploadRouter = Router()

/*
 * Upload image for food
 */
UploadRouter.put('/food', upload.single("uploaded_image"), (async (req, res) => {
  try {
    const food = await FoodService.updateImage(req.body._id, req.file.filename)
    res.status(201).send({
      message: 'Success',
      _id: food._id,
      img: url.resolve(process.env.DOMAIN, `images/${food.img}`)
    })
  }
  catch (error) {
    console.log(error)
    res.status(400).send({
      message: 'Failed'
    })
  }
}))

export default UploadRouter
