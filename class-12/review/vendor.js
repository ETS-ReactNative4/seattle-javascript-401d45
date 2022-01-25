'use strict';

const events = require('./eventPool.js');

events.on('delivery', handleDelivery);

function handleDelivery(payload) {
  console.log('Thank you for your order' + payload.orderId);
}

setInterval(() => {
  events.emit('pickup', {
    orderId: '8972364897yalisdhfua8sd7yf',
  });
}, 2000);

module.exports = handleDelivery;
