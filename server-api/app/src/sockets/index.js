/**
 * Set socket.io basic listeners
 * @param {SocketIO.Server} io 
 */
const initialSocketIO = (io) => {
  io.sockets.on("connection", (socket) => {
    console.log(socket.handshake.address, 'connected, id =', socket.id)

    socket.on("disconnect", () => {
      console.log(socket.handshake.address, 'disconnected')
    })
  })
}

export {
  initialSocketIO
}
