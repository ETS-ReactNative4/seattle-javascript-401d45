'use strict';

const socketioClient = require('socket.io-client');


// this line should trigger a connection event if successful
const message = socketioClient.connect('http://localhost:3000/messages');
// const server = socketioClient.connect('http://localhost:3000');

message.on('bananas', payload => {
  console.log(payload);
});

// message.emit('message', {
//   text: 'Hello from the client!!!',
// });
