'use strict';

const eventPool = require('./eventPool.js');
const armHandler = require('./arms.js');
const eyeHandler = require('./eyes.js');

eventPool.on('light', eyeHandler);
eventPool.on('warmth', armHandler);

setInterval(() => {
  
  let brightness = Math.floor(Math.random() * 100) + 1;
  
  // the event is whatever name you want to put here.
  eventPool.emit('light', { brightness });
  eventPool.emit('warmth', brightness > 60 ? {warm: true} : {warm : false});

}, 2000);
