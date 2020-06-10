import Router from 'express'
import path from 'path'

const ImageRouter = Router()

ImageRouter.get('/:imgPath', async (req, res) => {
    res.sendFile(path.join(process.env.IMAGE_DIRECTORY, req.params.imgPath))
})

export default ImageRouter
