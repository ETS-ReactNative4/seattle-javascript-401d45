'use strict';

const express = require('express');
const basicAuth = require('./basic-middleware.js');
const bearerAuth = require('./bearer-middleware.js');
const UserSchema = require('./userSchema.js');

const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize('sqlite:memory');
const Users = UserSchema(db, DataTypes);

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
  let { username, password } = req.body;

  // create a User
  let user = await Users.create({ username, password });
  res.send(user);
});

// // we still need this to initially grab a token
app.post('/signin', basicAuth(Users), (req, res) => {

  let token = req.user.token;
  let response = {
    token,
    id: req.user.id,
  };

  res.status(200).json(response);
});

// we can put a token on the request 
/**
 * Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhleHgiLCJpYXQiOjE2NDI1MzY3NzJ9.UYPBVxRXJkxXphzRgVp4BjWKAEST81hsfwvaGdkPpKk`
 */
app.get('/auth', bearerAuth(Users), (req, res) => {
  res.send('working on it');
});

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is listening');
    });
  });
