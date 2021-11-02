module.exports = (io) => io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);

    socket.emit('roomServerMessage', `Bem vindo ${username} a sala sobre ${room}`);

    socket.broadcast.to(room).emit('roomServerMessage', `${username} acabou de entrar na sala`);
    
    socket.on('roomClientMessage', ({ message, room}) => {
      io
        .to(room)
        .emit('roomServerMessage', `${username}: ${message}`)
    });
    socket.on('disconnect', () => {
      socket.broadcast.emit('roomServerMessage', `${username} saiu da sala.`);
    });
  });
})