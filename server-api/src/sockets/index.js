// import PaymentService from '../services/payment-service'
// import FoodRepo from '../repositories/food-repository'

let io = null

const initial = async (_io) => {
  io = _io
  io.sockets.on("connection", (socket) => {
    console.log('Client connected')
    socket.emit('ABCD', 'hello-world')
    // console.log(io.handshake.headers["x-real-ip"],
    //   'connected')
    // socket.on("send_order", (amount) => {
    //   const bill = PaymentService.createBill(amount)
    //   socket.emit("send_bill", bill)
    // })

    // socket.on("get_menu", async () => {
    //   socket.emit("send_food", await FoodRepo.getAll())
    // })

    // socket.on("disconnect", () => {

    // })
  })
}
const getIO = () => {
  return io
}

export default {
  initial,
  getIO
}
