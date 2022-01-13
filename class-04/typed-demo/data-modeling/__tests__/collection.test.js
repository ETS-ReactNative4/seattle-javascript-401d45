'use strict';

const { db, MessageCollection, AuthorCollection } = require('../models');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing the Collection module data storage', () => {
  let authorId;
  let messageId;

  it ('should create an author', async () => {
    let newAuthor = await AuthorCollection.create({name: 'Jacob'});
    authorId = newAuthor.id;
    expect(newAuthor.name).toEqual('Jacob');
  });

  it('should create a message', async () => {
    let newMessage = await MessageCollection.create({text: 'test', authorId });
    messageId = newMessage.id;
    expect(newMessage.text).toEqual('test');
  });

  it ('should read from messages', async () => {
    let messages = await MessageCollection.read();
    expect(messages.length).toEqual(1);
  });

  it('should read from message and include an author', async () => {
    let messages = await MessageCollection.read(null, AuthorCollection.model);
    expect(messages[0].Author).toBeDefined();
    expect(messages[0].Author.name).toEqual('Jacob');
  });
});
