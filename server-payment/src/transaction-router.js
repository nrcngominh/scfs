import Router from 'express'
import TransactionService from './transaction-service'

const TransactionRouter = Router()

TransactionRouter.use((req, res, next) => {
    // console.log()
    // console.log(new Date().toISOString()
    //   .replace(/T/, ' ')
    //   .replace(/\..+/, '')
    // )
    // console.log(req.method, req.originalUrl)
    // console.log('Headers:', req.headers)
    // if (req.method == 'GET') {
    //   console.log('Params:', req.params)
    // }
    // else {
    //   console.log('Body:', req.body)
    // }
    // console.log()
    next()
  })

TransactionRouter.post('/api/transaction', async (req, res) => {
    // Fake a customer to complete payment, then response to server
    const transaction = await TransactionService.create(req.body.billId, req.body.amount)
    res.status(201).send({
      momoTransId: transaction.momoTransId
    })
})

TransactionRouter.get('/api/transaction', async (req, res) => {
    try {
        const transactions = await TransactionService.getAll()
        res.status(200).send(transactions)
    } catch (error) {
        console.log(error)
    }
})

TransactionRouter.put('/api/transaction', async (req, res) => {
  try {
    await TransactionService.makeTransactionPaid(req.body.billId)
    res.status(202).send({
      message: 'Success'
    })
  } catch (error) {
    console.log(error)
  }
})

export default TransactionRouter