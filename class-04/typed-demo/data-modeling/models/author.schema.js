'use strict';

const authorSchema = (sequelize, DataTypes) => sequelize.define('Author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = authorSchema;
