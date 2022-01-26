'use strict';

// npm install @faker-js/faker

const socketClient = require('socket.io-client');

const socket = socketClient.connect('http://localhost:3000/caps');

// relay our package
socket.emit('pickup', {
  storeId: ';alskdj92839847',
  orderId: '23764hjaseiaf',
  customer: 'Jacob',
  address: '123 Super Cool St.',
});

// listen for delivery
socket.on('delivery', payload => {
  console.log('thanks for delivering : ' + payload.orderId);
});
