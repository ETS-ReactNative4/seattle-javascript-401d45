'use strict';

// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize();

const Squiseaudart = (sequelize, DataTypes) => sequelize.define('Squiseaudart', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  canFly: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Squiseaudart;
