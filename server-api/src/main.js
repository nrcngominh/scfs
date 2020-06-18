import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import BaseRouter from './api/routers'
import BaseSocket from './sockets'
import cookieParser from 'cookie-parser'

// Setup MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(
    () => console.log('Connected to database'))
  .catch(
    (err => console.log('Cannot connect to database')))


// Setup server
const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Start server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port', server.address().port)
})

// Create socket for server
BaseSocket.listen(server)

// Routing for API
app.use('/api', BaseRouter)
