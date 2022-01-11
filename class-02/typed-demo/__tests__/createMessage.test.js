'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing our Create Message features', () => {

  it('Should create a new message and send it back in the response', async () => {
    const response = await request.post('/message').send({
      text: 'test',
      author: 'test',
    });
  
    expect(response.status).toEqual(200);
    expect(response.body.text).toEqual('test');
  });

  it('should return a 400 status if no text or author is present', async () => {
    let response = await request.post('/message');

    expect(response.status).toEqual(400);
    expect(response.text).toEqual('Bad Request');
  });
});
