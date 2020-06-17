import Router from 'express'
import PaymentService from '../../services/payment-service'

const PaymentRouter = Router()

PaymentRouter.post('/', async (req, res) => {
  console.log(req.body);
  const bill = PaymentService.createBill(req.body.amount)
  res.send({
    billId: bill.billId,
    momoQrCode: bill.momoQrCode
  })
})

export default PaymentRouter
