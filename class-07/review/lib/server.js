'use strict';

const express = require('express');

// Prepare the express app
const app = express();
const signInRouter = require('./auth/routes/signin.js');
const signUpRouter = require('./auth/routes/signup.js');

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));
// Process JSON input and put the data on req.body
app.use(express.json());

app.use(signInRouter);
app.use(signUpRouter);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running on port :: ' + port);
    });
  },
  app,
};
