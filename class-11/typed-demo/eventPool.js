'use strict';

// build in utility node.
const Events = require('events');

const eventPool = new Events(); // this is a singleton for our event pool

module.exports = eventPool;
