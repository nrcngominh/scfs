import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import BaseRouter from './api/routers'
import path from 'path'
import history from 'connect-history-api-fallback'

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Setup server
const server = express()
server.use(cors())
server.use(express.json())

// Routing for API
server.use('/api', BaseRouter)

// Redirecting to dist folder of client for root endpoint
server.use(history())
server.use(express.static(path.join(process.env.PWD, '../client/dist')))

// Start server
const app = server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port', app.address().port)
})

