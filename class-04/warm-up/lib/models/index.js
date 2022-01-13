'use strict';

const { Sequelize, DataTypes } = require('sequelize');
// require our model
const squiseaudartSchema = require('./squiseaudart.schema.js');

const db = new Sequelize('sqlite:memory');
const SquiseaudartModel = squiseaudartSchema(db, DataTypes);

module.exports = {
  db,
  SquiseaudartModel,
};
    