import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import TransactionRouter from './transaction-router'

const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
const mongoUri = `${dbHost}/${dbName}`

// Connect to MongoDB
console.log(mongoUri)
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

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(TransactionRouter)

const server = app.listen(process.env.PORT, () => {
  console.log('Fake MOMO server is running on port', server.address().port);
})