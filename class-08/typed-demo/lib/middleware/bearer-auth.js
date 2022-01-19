'use strict';

// curried function = a function that returns another function
module.exports = (users) => (req, res, next) => {

  // req.headers.authorization should be : "Bearer slfldsf.alfjdslfjdsflj.sflasdjfdlsj"

  if (!req.headers.authorization) { next('Invalid Login'); return; }

  // Pull out just the encoded part by splitting the header into an array on the space and popping off the 2nd element
  let token = req.headers.authorization.split(' ').pop();

  // Notice that here, we're catching the errors from the user model.
  // let validUser = await users.authenticateBearer(token);
  return users.authenticateBearer(token)
    .then(validUser => {
      req.user = validUser;
      next();
    })
    .catch(err => next('Invalid Login'));
};


// curried function basics
// function sum(a, b) {
//   return a + b;
// }
// let number = sum(1,2);


// function sum1(a) {
//   return function sum2(b) {
//     return a + b;
//   };
// }

// let sum2 = sum1(1);
// let num = sum2(2);
