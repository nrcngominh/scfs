import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import BaseRouter from './api/routers'
import path from 'path'

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Setup server
const server = express()
server.use(cors())
server.use(express.json())

// Redirecting to dist folder of client for root endpoint
const publicDir = path.join(process.env.PWD, '../client/dist')
console.log(publicDir);
server.use('/', express.static(publicDir))

// Routing for API
server.use('/api', BaseRouter)

// Start server
const app = server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port', app.address().port)
})

