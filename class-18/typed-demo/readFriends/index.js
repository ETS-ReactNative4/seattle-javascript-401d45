const dynamoose = require('dynamoose'); // third party software

exports.handler = async (event) => {
  console.log(event.pathParameters);
  console.log(event.queryStringParameters);

  let friendSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phone: String,
  });

  // this model method will use the string provided to talk to that table on Dynamo DB
  let Friends = dynamoose.model('friends', friendSchema);

  // query by id
  // await Friends.query('id').eq(id).exec()

  let friendRecords = await Friends.scan().exec();

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(friendRecords),
  };
  return response;
};
