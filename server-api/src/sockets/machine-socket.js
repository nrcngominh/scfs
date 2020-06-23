import PaymentService from '../services/payment-service'
import axios from 'axios'

const setMachineListener = (io, socket) => {
  socket.on("send_order", async (order) => {
    console.log("Order received from machine")
    console.log(order)
    const bill = PaymentService.createBill(JSON.parse(order))
    try {
      const transRes = await axios.post('http://127.0.0.1:4000/api/transaction', bill)
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