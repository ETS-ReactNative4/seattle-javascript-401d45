'use strict';

const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const app = express();

let db = new Sequelize('sqlite:memory');

let User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// automatically assign an encrypted password to our User. beforeCreate is a feature of sequelize models, takes a callback function
User.beforeCreate(async user => {
  user.password = await bcrypt.hash(user.password, 10);
});

app.use(express.json());

// create a User on Post to /signup
app.post('/signup', async (req, res) => {
  let { username, password } = req.body;

  // let encryptedPass = await bcrypt.hash(password, 10);

  // encrypt the password, sore it in the database;
  // let newUser = await User.create({ username, password: encryptedPass});
  let newUser = await User.create({username, password}); // this will trigger our beforeCreate Hook.

  let response = {
    username: newUser.username,
    id: newUser.id,
  };

  res.send(response);
});


app.post('/signin', async (req, res) => {

  // read the headers attached to the request
    // Authorization: `Basic <encoded-string>`
  let encodedCredentials = req.headers.authorization.split(' ')[1];
  
  // we will decode the header into a username and password
    // Jacob / secretString
  let decodedCredentials = base64.decode(encodedCredentials);
  let [username, password] = decodedCredentials.split(':'); //  this is the password sent on the request in the header.
  console.log(decodedCredentials);

  // find the User associated with the request
    // {username: 'Jacob', password: '$2$1023645jhadsgf.q34yr8aydfu}
  let user = await User.findOne({where: {username: username}});
  console.log(user);

  // compare the raw password, with the encryupted password
  let isValidPassword = await bcrypt.compare(password, user.password);

  // if this checks out, we fullfill the request.
  if (isValidPassword) {
    res.status(200).send('You\'re a valid request');
  } else {
    res.status(401).send('You\'re not a valid request');
  }
});

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is up and running');
    });
  });
