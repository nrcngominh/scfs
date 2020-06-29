import PaymentService from '../services/payment-service'
import axios from 'axios'

const setMachineListener = (io, socket) => {
  socket.on("send_order", async (order) => {
    console.log("Order received from machine")
    console.log(order)
    const bill = PaymentService.createBill(JSON.parse(order))
    try {
      await axios.post(process.env.PORT + 'api/transaction', bill)
      console.log(bill)
      socket.emit("send_bill", {
        momoQrCode: bill.momoQrCode
      })
    }
    catch (error) {
      console.log(error)
    }
  })
}

export {
  setMachineListener
}