'use strict';

const { db } = require('./lib/models');
const { start } = require('./lib/server.js');
const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => start(PORT))
  .catch((err) => console.log(err));
