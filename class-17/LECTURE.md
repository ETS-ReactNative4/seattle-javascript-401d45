# Class 17: Lambda and S3

## Warm Up (30 mins)

Prompt: Given a Binary Search Tree of Integers, return an iterable of all the integers from lowest to highest.

* What methods do we have access to: only adding.
* Is an array okay: yes, an array is an iterable.
* BST: already sorted.
* any data structure limits: no restrictions on Data Structures.

```javascript

// time: O(n) we are recursing over our nodes, n times.
// space: O(n) we are pushing in at least n number of things into our array.
function lowestToHighest(root) {
// strategy: In-order traversal
  // favor reading left subtree before anything else
  //  as we read the values, add them into the array. 
  const lowToHigh = [];
  // const callStack = [];

  // make sure our comparison, is the correct type.
  let current = root;

  inOrder(root, (value) => lowToHigh.push(value)); 
  // while(current) {

  //     if (root.left) {
  //       if (current.value > root.left.value) {
  //         lowTohigh.push(current);
  //       }
  //       current = root.left
  //     }
  //     if (root.right) {
  //       if (current.value > root.right.value) {
  //         lowToHigh.push(current);
  //       }
  //       current = current.right;
  //     }

  //   }


  return lowToHigh;
}

function inOrder(root, cb) {
  if (root.left) {
    inOrder(root);
  }
  // do something with the root
  // console.log(root);
  cb(root);
  if (root.right) {
    inOrder(root);
  }
}
```

* Thanks Scott for walking us through this solution!
* See Warm Up file for cleaned up solution.

## Review (20 mins)

* Lots of options!  Some are required, some are optional.
* Errors from elastic beanstalk
  * `auto-scaling` and `load-balancing`.
  * Assume these are features configured by AWS.
* Installing `eb` cli.
  * Installing `eb` from source.
  * Reverting to `brew install awsebcli`.
* Error: failed to create a `procfile`.
  * Showed up in the terminal using eb-cli.
    * The procfile is used to tell our server what commands it should use to run our applications.
    * We typically use an npm script to tell automation what to do: `npm start: node index.js`.

* EC2: Amazons virtual machine service.
  * Virtual Machine: An instance of an operating system running on a physical machine.
    * Contained within another operating system.
    * The higher level operating system provisions some resources.
* Elastic Beanstalk: Wrapper around the EC2 instance.
  * Handles the configuration of an EC2 instance.
  * Specifically for a Web Service.
  * What is an elastic beanstalk environment?
    * The configuration for the system that app is running on.

## Serverless Infrastucture (1 hour)

What is a serverless infrastrcuture, Jacob thinks it should be called serverfull.  I think micro server is a much better term.

* We are removing monolithic servers.
  * Very large Code Bases.
  * These are hard to manage.
* Let's get rid of these huge servers, and just have the smallest server / service possible.
  * Our functionality will be expressed as minimally.
    * Run a function, triggered by in variuos ways, but always does 1 very specific job.

### S3 (simple storage service) (30 mins)

* A repository for anything "bucket".
  * Built for programatic access(reading and writing) by both humans and machines.
  * Very cost effective, you only pay for reads.
* Why not use a DB.
  * Dbs are only good for scalar (immutales)
    * strings
    * numbers
    * booleans

### Lambda (micro "servers") (30 mins)

* Micro Server function that run in response to "something".
* Triggering our Lambda from s3

1. Create the Bucket / (create a lambda if not created).
1. Add the trigger from Lambda
  - Maybe add the `images/` prefix, so only things added to images trigger our lambda.
1. Create a test event to debug your lambda.
  - Make sure you can read the object from s3.
1. Add an image to the images folder
1. Check your logs to validate that the image name is present in the logs.

$$
