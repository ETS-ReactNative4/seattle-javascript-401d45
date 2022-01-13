'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const Collection = require('./Collection.js');
const messageSchema = require('./message.schema.js');
const authorSchema = require('./author.schema.js');

const db = new Sequelize(DATABASE_URL);

const MessageModel = messageSchema(db, DataTypes);
const AuthorModel = authorSchema(db, DataTypes);

// create an association between 2 tables
AuthorModel.hasMany(MessageModel, { foreignKey: 'authorId', sourceKey: 'id'}); 
MessageModel.belongsTo(AuthorModel, { foreignKey: 'authorId', targetKey: 'id'});

module.exports = {
  db,
  MessageCollection: new Collection(MessageModel),
  AuthorCollection: new Collection(AuthorModel),
};
