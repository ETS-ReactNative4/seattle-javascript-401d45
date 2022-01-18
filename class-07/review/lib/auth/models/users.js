'use strict';

const { Sequelize, DataTypes } = require('sequelize');

// this is another singleton
const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite:memory' );

// Create a Sequelize model
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// our before create hook (this hook is built in)
Users.beforeCreate();

// we can authenticate on the User Model
Users.authenticateStrings = function(username, password) {

};

// Users.prototype.authenticateStrings = function() {}
 
module.exports = {
  sequelize,
  Users,
};
