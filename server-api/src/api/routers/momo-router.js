import Router from 'express'
import BaseSocket from '../../sockets'
import axios from 'axios'

const MomoRouter = Router()


/*
 * Fake MOMO server use this endpoint to notify a pending transaction has been made
 */
MomoRouter.post('/', async (req, res) => {
  res.status(200).send({
    message: 'Success'
  })
  BaseSocket.getIO().emit('payment_success', null)
})

/*
 * Use to fetch all transactions from fake MOMO server (both pending and paid)
 */
MomoRouter.get('/', async (req, res) => {
  try {
    const transactionsRes = await axios.get('http://127.0.0.1:4000/api/transaction')
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
