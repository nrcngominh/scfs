import Router from 'express'
import TransactionService from './transaction-service'
import axios from 'axios'

const TransactionRouter = Router()

TransactionRouter.use((req, res, next) => {
    console.log()
    console.log(new Date().toISOString()
      .replace(/T/, ' ')
      .replace(/\..+/, '')
    )
    console.log(req.method, req.originalUrl)
    console.log('Headers:', req.headers)
    if (req.method == 'GET') {
      console.log('Params:', req.params)
    }
    else {
      console.log('Body:', req.body)
    }
    console.log()
    next()
  })

TransactionRouter.post('/api/transact', async (req, res) => {
    // Fake a customer to complete payment, then response to server
    const transaction = await TransactionService.create(req.body.billId, req.body.amount)
    res.status(201).send({
      momoTransId: transaction.momoTransId
    })
    
    // Sleep
    // const sleepTimeInSeconds = 3

    // await new Promise(r => setTimeout(r, sleepTimeInSeconds * 1000))
    // console.log(req.body.billId)
    // await axios.put('http://127.0.0.1:3000/api/momo', {
    //   billId: req.body.billId
    // })
})

TransactionRouter.get('/api/transact', async (req, res) => {
    try {
        const transactions = await TransactionService.getAll()
        res.status(200).send(transactions)
    } catch (error) {
        console.log(error)
    }
})

TransactionRouter.put('/api/transact', async (req, res) => {
  try {
    await TransactionService.makeTransactionPaid(req.body.billId)
    res.status(202).send({
      message: 'Success'
    })
    await axios.put('http://127.0.0.1:3000/api/momo', {
      billId: req.body.billId
    })
  } catch (error) {
    console.log(error)
  }
})

export default TransactionRouter