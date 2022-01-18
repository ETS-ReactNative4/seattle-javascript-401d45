'use strict';

const express = require('express');
const basicAuth = require('./basic-middleware.js');
const bearerAuth = require('./bearer-middlware.js');
const UserSchema = require('./userSchema.js');

const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize('sqlite:memory');
const User = UserSchema(db, DataTypes);

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
  let { username, password } = req.body;

  // create a User
  let user = await User.create({ username, password });
  res.send(user);
});

// // we still need this to initially grab a token
// app.post('/signin', basicAuth, (req, res) => {

// });

// we can put a token on the request 
/**
 * Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhleHgiLCJpYXQiOjE2NDI1MzY3NzJ9.UYPBVxRXJkxXphzRgVp4BjWKAEST81hsfwvaGdkPpKk`
 */
app.get('/auth', bearerAuth, (req, res) => {

});

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is listening');
    });
  });
