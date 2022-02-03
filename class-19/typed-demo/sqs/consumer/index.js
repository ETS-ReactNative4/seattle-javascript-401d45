'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/275199309843/pickup', // this is an http URL not an ARN Like SNS
  handleMessage: (message) => {
    console.log(message);
  },
});

// start the polling
app.start();
