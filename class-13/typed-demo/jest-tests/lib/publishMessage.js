'use strict';

// dependencies injected by our runtime, not our code
const Events = require('events');
const Users = require('./model');

// config that happens here but could happen anywhere
const messages = new Events();
messages.on('send', publishMessage);

// the function we want to test
async function publishMessage(payload) {
  let validUser = await Users.findOne(payload.userId);
  messages.emit('received', { userId: validUser.id, messageId: payload.messageId });
}

module.exports = publishMessage;
