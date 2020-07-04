import 'module-alias/register'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import SocketIO from 'socket.io'
import BaseSocket from '@socket'
import BaseRouter from '@router'

const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
const mongoUri = `${dbHost}/${dbName}`

// Connect to MongoDB
const connectWithRetry = () => {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (err) {
      console.error('Failed to connect to MongoDB on startup - retrying in 5 sec', err)
      setTimeout(connectWithRetry, 5000)
    }
  })
}
connectWithRetry()

// Setup server
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Start server
const server = app.listen(process.env.PORT, () => {
  console.log('REST server is running on port', server.address().port)
})

// Create socket for server
const io = SocketIO.listen(server)
BaseSocket.initial(io)

// Routing
app.use('/', BaseRouter)