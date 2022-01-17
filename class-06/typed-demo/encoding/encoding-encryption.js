'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');

// ENCODING

let username = 'Jacob';
let password = '#%&^*%*&hfaiduahsd">?{PP{';

let credentials = username + ':' + password;

// happens client side
let encoded = base64.encode(credentials);

// console.log(credentials, encoded);

// happens server side
let decoded = base64.decode(encoded); // this is not super secure.

let [user, pass] = decoded.split(':');

// console.log(decoded.split(':'));
console.log(user, pass);

// ENCRYPTION

// ecryption is a little resource intensive and as such it's async.

async function encrypt(password) {

  let hash = await bcrypt.hash(password, 12); // the level of complexity for our hash.

  let p1 = '$2b$10$FrYL9yiKO3n0N3fYbs0Exeiy.owyP72DHQ1q7YiJ8a7QlndgqhHiu';
  let p2 = '$2b$10$Hxi21r/hmOisHFQ2vQ90zuRZfQyegygA3gyzMJEwxhuL6EKyb6Gh';

  let isP1Valid = await bcrypt.compare(password, p1); // compare regular string, with and encrypted hash.
  let isP2Valid = await bcrypt.compare(password, p2);

  console.log(isP1Valid);
  console.log(isP2Valid);
  console.log(hash);
}

encrypt(pass);
