'use strict';


const socketio = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = socketio(PORT); // this line starts our server.
const caps = server.of('/caps');


caps.on('connection', (socket) =>  {
  console.log('socket connected');

  // do your socket want to join a specific
  socket.on('join', room => {
    socket.join(room);
  });

  // receive package waiting to be picked up
  socket.on('pickup', payload => {
    // payload == package sent from vendor

    // maybe cache our package somewhere?
    // maybe a queue?
    // perhaps an object of key value pairs, each driver selected a package and makes the delivery.

    socket.broadcast.emit('pickup', payload);
  });
  socket.on('in-transit', payload => {
    // run logger
    socket.emit('in-transit', payload);
  });
  socket.on('delivery', payload => {
    // remove package from cache??
    socket.broadcast.emit('delivery', payload);
  });
  // socket.on('getPackage')
});

function logger() {

}
