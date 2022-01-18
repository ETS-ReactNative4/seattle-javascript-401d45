'use strict';

const { start } = require('./lib/server.js');
const { sequelize } = require('./lib/auth/models/users.js');
// import something??

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    start(PORT);
  });
