import socket_io from 'socket.io'
import PaymentService from '../services/payment-service'
import FoodService from '../services/food-service'

let io
export default {
  async listen(server) {
    io = socket_io.listen(server)
    io.sockets.on("connection", (socket) => {
      socket.on("send_order", (amount) => {
        const bill = PaymentService.createBill(amount)
        socket.emit("send_bill", bill)
      })

      socket.on("get_menu", async () => {
        socket.emit("send_food", await FoodService.getAll())
      })

      socket.on("disconnect", () => {

      })
    })
  },
  getIo() {
    return io
  }
}
