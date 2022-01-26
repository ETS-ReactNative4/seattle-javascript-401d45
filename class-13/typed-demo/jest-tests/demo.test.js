'use strict';

const publishMessage = require('./lib/publishMessage.js');
const Events = require('events');
const Users = require('./lib/model');


// jest wants you to test your code and only your code
// if you dendencies injected into your code by another runtime.

// Jest Mocks are a way to inject other global calues besides the things your didn't write.
jest.mock('events', () => {
  return jest.fn().mockImplementation(() => {
    return {on: jest.fn(), emit: jest.fn()};
  });
});// 2 things, the paht or name of a module to mock, and a factory function whos object will be inject into the runtime.
jest.mock('./lib/model', () => {
  return {
    findOne: jest.fn(() => {
      return {
        userId: 1987,
        messageId: 2468,
      };
    }),
  };
});

describe('Running a demo test', () => {

  it('Should pass', () => {

    let payload = {
      userId: 1234,
      messageId: 5678, 
    };

    publishMessage(payload);
    expect(Users.findOne).toHaveBeenCalledWith(payload.userId);
    expect(Events).toHaveBeenCalled();
  });
});
