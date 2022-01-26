'use strict';

// const socketClient = require('socket.io-client');

// const HOST = process.env.HOST || 'http://localhost:3000';
// const NAMESPACE = process.env.NAMESPACE || '/chores';

// const chores = socketClient.connect(`${HOST}${NAMESPACE}`);

// chores.emit('get chores');
// chores.on('sending chore', payload => {
//   console.log(payload);

//   chores.emit('done', { choreId: payload.id });
// });

const QueueClient = require('./lib/QueueClient.js');

let chores = new QueueClient('/chores');

chores.publish('get chores');
chores.subscribe('sending chore', (payload) => {
  console.log(payload);
  chores.publish('done', { choreId: payload.id});    
});


// app.post('/chore', (req, res) => {
//   chores.publish('new chore', req.body);
// })
