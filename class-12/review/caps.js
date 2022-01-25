'use strict';

const events = require('./eventPool.js');
require('./vendor.js');

events.on('pickup', (payload) => logger('pickup', payload));
events.on('in-transit', console.log);
// events.on('delivery')

function logger(event, payload) {
  console.log('EVENT: ' + event.toUpperCase());
  console.log('Order received: ' + payload.orderId);
}

// events.emit('pickup', {
//   orderId: '8972364897yalisdhfua8sd7yf',
// });
