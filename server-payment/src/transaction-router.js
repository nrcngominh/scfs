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

TransactionRouter.post('/api/transaction', async (req, res) => {
    // Fake a customer to complete payment, then response to server
    const transaction = await TransactionService.create(req.body.billId, req.body.amount)
    res.status(201).send({
      momoTransId: transaction.momoTransId
    })
    
    // Sleep
    const sleepTimeInSeconds = 15

    await new Promise(r => setTimeout(r, sleepTimeInSeconds * 1000))
    await TransactionService.makeTransactionPaid(transaction.momoTransId)
    await axios.post('http://127.0.0.1:3000/api/momo', transaction)
})

TransactionRouter.get('/api/transaction', async (req, res) => {
    try {
        const transactions = await TransactionService.getAll()
        res.status(200).send(transactions)
    } catch (error) {
        console.log(error)
    }
})

export default TransactionRouter