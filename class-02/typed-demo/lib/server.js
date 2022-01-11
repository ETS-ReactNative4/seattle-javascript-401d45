'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const notFound = require('./middleware/notFound.js');
const serverError = require('./middleware/serverError.js');
const createMessage = require('./middleware/createMessage.js');
const checkRequest = require('./middleware/checkRequest.js');
const badRequest = require('./middleware/badRequest.js');

// server wide middlware
// put server wide things that happen always, for everything up at the top of your server config.
app.use(logger);
app.use(express.json()); // this attaches any json to a body property on the request.

app.get('/', (req, res, next) => {
  res.send('hitting home route');
});

app.post('/message', checkRequest, createMessage);

// make sure you error handlers are below any middleware that would next to trigger.
app.use(badRequest);
app.use(serverError);

// any route that you want to run, but only if no other route is hit, should go at the bottom
app.use(notFound);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is listening on port: ' + port );
    });
  },
  app,
};
