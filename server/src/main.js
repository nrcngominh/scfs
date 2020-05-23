import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import BaseRouter from './api/routers/base-router'

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Setup server
const server = express()
server.use(cors())
server.use(express.json())
server.use(BaseRouter)

// Start server
const app = server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port', app.address().port)
})