import express from 'express'
import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/scfs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const server = express()

server.get('/', (req, res) => {
    res.send('Hello World')
})

server.listen(3000, () => {
    console.log("Server is running...")
})