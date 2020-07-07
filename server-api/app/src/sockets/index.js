let io = null

const initial = async (_io) => {
  io = _io
  io.sockets.on("connection", (socket) => {
    console.log(socket.handshake.address, 'connected')

    socket.on("disconnect", () => {
      console.log(socket.handshake.address, 'disconnected')
    })
  })
}
const getIO = () => {
  return io
}

export default {
  initial,
  getIO
}
