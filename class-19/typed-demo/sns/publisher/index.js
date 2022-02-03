'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2'});

// make suer you aws-cli id configured with your ACCESS KEY and SECRET ACCESS KEY
const sns = new AWS.SNS();
const topic = 'arn:aws:sns:us-west-2:275199309843:pickup';

// these properties tell SNS what the message field, and the topic to publish to.
const payload = {
  Message: 'Pickup ready!',
  TopicArn: topic,
};

sns.publish(payload).promise()
  .then(data => console.log(data))
  .catch(err => console.error(err));
