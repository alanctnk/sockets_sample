module.exports = (io) => io.on('connection', (socket) => {
  socket.on('clientMessage', (message) => {
    console.log(`${socket.id} enviou: ${message}\n`);
    io.emit('serverMessage', {user: socket.id, message})
  });
});