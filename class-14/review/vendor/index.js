'use strict';

// how do we communicate with the caps server?

const socketio= require('socket.io-client');
const { faker } = require('@faker-js/faker');

let HOST = 'http://localhost:3000';
let namespace = '/caps';
let description = process.argv[2];

const socket = socketio.connect(`${HOST}${namespace}`);

// our connection is made!!!

socket.on('connect', () => {
  let payload = {
    orderId: '12345',
    description: description,
    customer: faker.name.firstName(),
    vendor: '1-800-flowers',
  };
  socket.emit('join', payload.orderId);
  socket.emit('pickup', payload);


  socket.on('in-transit', console.log);
  socket.on('delivery', console.log);
});
