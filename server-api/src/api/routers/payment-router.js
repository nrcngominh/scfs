import Router from 'express'
import PaymentService from '../../services/payment-service'

const PaymentRouter = Router()

PaymentRouter.post('/', async (req, res) => {
  const bill = PaymentService.createBill(req.body.amount)
  res.status(201).send({
    billId: bill.billId,
    momoQrCode: bill.momoQrCode
  })
})

export default PaymentRouter