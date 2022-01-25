'use strict';

const socketio = require('socket.io');

const PORT = process.env.PORT || 3000;

// observable singleton
const server = socketio(PORT);

// namespaces 
const messages = server.of('/messages');

// our connection event from socket o
server.on('connection', (socket) => {

  console.log('someone connected!!!');

  // send to all sockets
  // server.emit('banana', {
  //   data: 'This belonfa to all sockets on the server',
  // });

  // send to just the socket that connected.
  // socket.emit('banana', {
  //   data: 'This belongs to :' + socket.id,
  // });

  // we need to tell each socket how to respond.
  socket.on('message', (payload) => {

    // how do we response when a message event comes through our server?
    console.log('message event triggered');
    // server.emit('message', payload);

    // emit to all other socket currently connected to the server
    socket.broadcast.emit('message', payload);
  });
});

messages.on('connection', (socket) => {

  console.log('Socket connnected to messages: ' + socket.id);

  socket.join('test room');

  messages.to('test room').emit('bananas', {
    data: 'Hello from the bananas rooom',
  });

});
