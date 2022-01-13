'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

// require our routers
const squiseaudartRouter = require('./routes/squiseaudart.js');

app.use(express.json());
app.use(cors());
app.use(squiseaudartRouter);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is listening on port : ' + port);
    });
  },
  app,
};
