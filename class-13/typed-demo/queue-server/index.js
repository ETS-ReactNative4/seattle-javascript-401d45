'use strict';

const uuid = require('uuid').v4;
const socketio = require('socket.io');

const server = socketio(3000);
const chores = server.of('/chores');

const queue = {
  chores: {},
  addChore: function(chore) {
    let id = uuid(); // halksjdhf-asdkhfasd-y3t8267t
    this.chores[id] = chore;
    console.log(this.chores);
    return {
      id,
      payload: chore,
    };
  },
  removeChore: function(id) {
    delete queue.chores[id];
  },
};

chores.on('connection', (socket) => {

  // sockets can add a chore to our queue
  socket.on('add chore', chore => {
    let payload = queue.addChore(chore);
    chores.emit('chore added', payload);
  });

  // give all chores to the socket that asked
  socket.on('get chores', () => {
    Object.keys(queue.chores).forEach(id => {

      socket.emit('sending chore', { id, payload: queue.chores[id] });

    });
    console.log(queue.chores);
  });

  //remove chore from our queue
  socket.on('done', payload => {
    queue.removeChore(payload.choreId);
    console.log(queue);
    chores.emit('completed', { choreId: payload.choreId});
  });
});
