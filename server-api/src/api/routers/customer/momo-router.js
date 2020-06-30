import Router from 'express'
import BaseSocket from '../../../sockets'
import axios from 'axios'
import OrderRepo from '../../../repositories/order-repository'

const MomoRouter = Router()


/*
 * Fake MOMO server use this endpoint to notify a pending transaction has been made
 */
MomoRouter.put('/', async (req, res) => {
  const billId = req.body.billId
  await axios.put(process.env.PAYMENT_HOST + 'api/transaction', {
    billId: billId
  })
  await OrderRepo.updatePaidByBillId(billId)
  res.status(200).send({
    message: 'Success'
  })
  BaseSocket.getIO().emit('PAYMENT_SUCCESS', JSON.stringify({
    billId: billId
  }))
})

/*
 * Use to fetch all transactions from fake MOMO server (both pending and paid)
 */
MomoRouter.get('/', async (req, res) => {
  try {
    const transactionsRes = await axios.get(process.env.PAYMENT_HOST + 'api/transaction')
    res.status(200).send(transactionsRes.data)
  }
  catch (error) {
    console.log(error)
    res.status(400).send({
      message: 'Failed'
    })
  }
})

export default MomoRouter
