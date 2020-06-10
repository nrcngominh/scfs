import Router from 'express'
import path from 'path'

const ImageRouter = Router()

ImageRouter.get('/:imgPath', async (req, res) => {
    res.sendFile(path.join(process.env.IMAGESDB_PATH, req.params.imgPath))
})

export default ImageRouter
