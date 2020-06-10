import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { BaseRouter, ImageRouter } from './api/routers'

// Setup MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log(process.env.MONGODB_URI)

// Setup server
const server = express()
server.use(cors())
server.use(express.json())

// Routing for API
server.use('/api', BaseRouter)

// Routing for images
server.use('/img', ImageRouter)

// Start server
const app = server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port', app.address().port)
})
