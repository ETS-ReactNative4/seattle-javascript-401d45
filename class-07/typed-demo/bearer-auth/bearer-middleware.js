'use strict';

const jwt = require('jsonwebtoken');

// read the req.headers.authorization 

// use jwt to verify the tokens integrity
//   jwt.verify(token, APP_SECRET); // returns paylaod or error

const bearerAuth = (Users) => async (req, res, next) => {

  let bearerHeaderParts = req.headers.authorization.split(' ');
  let token = bearerHeaderParts.pop();
  // is the token vali

  console.log(token);
  let validUser = await Users.authenticateToken(token);
  if(validUser) {
    req.user = validUser;
    next();
  } else {
    next('Invalid User');
  }
};

module.exports = bearerAuth;
