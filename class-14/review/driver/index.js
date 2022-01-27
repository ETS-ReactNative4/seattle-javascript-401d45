'use strict';

const socketio= require('socket.io-client');

let HOST = 'http://localhost:3000';
let namespace = '/caps';

const socket = socketio.connect(`${HOST}${namespace}`);

socket.on('connect', () => {
  socket.on('pickup', handlePickup);
});

function handlePickup(payload) {

  console.log('Order picked up');
  socket.emit('in-transit', payload);
  
  setTimeout(() => {
    socket.emit('delivery', payload);
  }, 2000);
}
