'use strict';

const messageSchema = (sequelize, DataTypes) => sequelize.define('Message', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = messageSchema;
