import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Setup server
const server = express()
server.use(cors())
server.use(express.json())

// Login
server.post('/login', (req, res) => {
  console.log(req.body)
})

// Start server
const app = server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port', app.address().port)
})