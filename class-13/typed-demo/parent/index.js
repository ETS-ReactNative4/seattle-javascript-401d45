'use strict';

const socketClient = require('socket.io-client');

const HOST = process.env.HOST || 'http://localhost:3000';
const NAMESPACE = process.env.NAMESPACE || '/chores';

const chores = socketClient.connect(`${HOST}${NAMESPACE}`);

chores.on('chore added', (payload) => {
  console.log(payload);
});
chores.on('completed', (payload) => {
  console.log('Chore done!! ', payload);
});

chores.emit('add chore', 'do the shes');
chores.emit('add chore', 'clean the counter');
