let io = null

const initial = (_io) => {
  io = _io
  io.sockets.on("connection", (socket) => {
    console.log(socket.handshake.address, 'connected')

    socket.on("disconnect", () => {
      console.log(socket.handshake.address, 'disconnected')
    })

    socket.on("CLIENT_SAY_HI", (data) => {
      console.log(data)
      socket.emit("SERVER_SAY_HI", { message: "Hello from server" })
    })
  })
  return io
}
const getIO = () => {
  return io
}

export default {
  initial,
  getIO
}
