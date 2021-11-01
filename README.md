# Exemplo de Sockets

- socket.emit : Enviar uma mensagem apenas entre cliente <=> servidor que dispara um evento.
- io.emit : Enviar uma mensagem para todos os clientes com uma conexão socket aberta. (Só é possível usar do lado do servidor)
- socket.broadcast.emit : Enviar uma mensagem para todos os clientes exceto o cliente que disparou o evento. (Só é possível usar do lado do servidor)
- socket.on('eventoCustomizado') : Escutar um evento qualquer.
- socket.on('disconnect') : Escutar o evento disparado quando um usuário se desconecta.
- socket.disconnect : Força o encerramento de uma conexão socket.
##
- socket.join : Conecta um cliente a uma sala específica.
- socket.broacast.to(x).emit e io.to(x).emit : Funciona equivalente ao que já vimos anteriormente, porém enviando a mensagem apenas para os clientes que estiverem conectados a sala x .