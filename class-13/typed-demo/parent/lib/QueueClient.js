'use strict';

const socketClient = require('socket.io-client');
const HOST = process.env.HOST || 'http://localhost:3000';

class QueueClient {
  constructor(namespace) {
    this.socket = socketClient.connect(`${HOST}${namespace}`);
  }

  subscribe(event, cb) {
    this.socket.on(event, cb);
  }

  publish(event, payload) {
    this.socket.on(event, console.log);
    this.socket.emit(event, payload);
  }
}
module.exports = QueueClient;
