import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import TransactionRouter from './transaction-router'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// Setup MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(
      () => console.log('Connected to database'))
    .catch(
      (err => console.log('Cannot connect to database')))

app.use(TransactionRouter)

const server = app.listen(4000, () => {
    console.log('Server is running on port', server.address().port);
})
