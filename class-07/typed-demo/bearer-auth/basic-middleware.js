'use strict';

const base64 = require('base-64');

const basicAuth = (Users) => async (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop();
  let decodedString = base64.decode(encodedString);
  let [username, password] = decodedString.split(':');

  try {
    const validUser = await Users.authenticateBasic(username, password);
    req.user = validUser;
    next();
  } catch(e) {
    console.log(e);
    next('Invalid User');
  }
};

module.exports = basicAuth;
