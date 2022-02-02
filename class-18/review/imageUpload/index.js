const AWS = require('aws-sdk');

const S3 = new AWS.S3();

exports.handler = async (event) => {
  const fileName = event.Records[0].s3.object.key;
  const fileSize = event.Records[0].s3.object.size;
  const bucketName = event.Records[0].s3.bucket.name;
  
  let metaData = {
    name: fileName,
    size: fileSize,
    type: 'image',
  };
  
  console.log(bucketName);
  try {
    // try to read the manifest 
    let manifestBody = await S3.getObject({Bucket: bucketName, Key: 'images.json'}).promise();  
    
    console.log(manifestBody);
    // appending info to the manifest
    let manifestJSON = JSON.parse(manifestBody.Body.toString());
    manifestJSON.push(metaData);
    
    // saving our updated manifest
    let newManifest = S3.putObject({
      Bucket: bucketName,
      Key: 'images.json',
      Body: JSON.stringify(manifestJSON),
    }).promise();   

    const response = {
      statusCode: 200,
      body: JSON.stringify(newManifest),
    };
    return response;
      
  } catch (e) {
    console.log(e);
    
    let manifest = [metaData];
    
    let newManifest = await S3.putObject({
      Bucket: bucketName,
      Key: 'images.json',
      Body: JSON.stringify(manifest),
    }).promise();   
    
    return {
      Message: 'Created new manifest',
      Body: JSON.stringify(newManifest),
    };
  }
};
