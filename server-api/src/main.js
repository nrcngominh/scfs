import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import SocketIO from 'socket.io'
import BaseSocket from './sockets'
import BaseRouter from './api/routers'

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
const io = SocketIO.listen(server)
BaseSocket.initial(io)

// Routing for API
app.use('/api', BaseRouter)

