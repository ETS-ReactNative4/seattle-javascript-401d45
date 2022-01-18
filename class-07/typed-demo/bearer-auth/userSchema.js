'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const APP_SECRET = process.env.APP_SECRET || 'secretstringfortesting';

const UserSchema = (sequelize, DataTypes) => {
  let model = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({username: this.username}, APP_SECRET);
      },
    },
  });

  model.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  // fat arrow to not bind this properly
  model.authenticateBasic = async function(username, password) {
    let user = await this.findOne({ where: { username }});
    let isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      return user;
    } else {
      throw new Error('Invalid User!');
    }
  };

  model.authenticateToken = async function (token) {
    let payload = jwt.verify(token, APP_SECRET);
    console.log(payload);
    const user = await this.findOne({where: { username: payload.username }});

    if (user) {
      return user;
    } else {
      throw new Error('Invalid User');
    }
  };

  return model;
};

// This will not work
// const UserSchema = (sequelize, DataTypes) => sequelize.define('User', {

// });

// UserSchema.beforeCreate();

module.exports = UserSchema; // the type here is `function`
