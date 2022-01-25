'use strict';

const deliveryHandler = require('../vendor.js');

describe('testing the delivery handler', () => {

  // pick one as a mocking method
  jest.spyOn(console, 'log'); // tell hest to monitor the log method on the console object.
  // console.log = jest.fn(); // replaces the console.log function with a jest spy function.

  it ('should log a message with the order id', () => {
    const payload =  {
      orderId: 'jldksahfilasduf826763847',
    };
    deliveryHandler(payload);
    expect(console.log).toHaveBeenCalled();
  });
});
