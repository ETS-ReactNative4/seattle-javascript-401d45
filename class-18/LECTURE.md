# Class 18: API Gateway (REST) and Dynambo DB  (CRUD)

## Warm Up

Prompt: Given a k-ary tree of integers, return the sum of all leaves in the tree.
Strategy:

 1. Traverse the tree.
    1a if a visited node has no children, add the value to a result.
 1. return the result.

### PseudoCode

```text

// Traverse the tree
//  breadth first traversal
DEFINE queue as a new Queue
DEFINE results as a Number to return

// we need a loop to read values from queue
check k-ary tree node for children

  // if so, add children to queue
  for every child in node children
    enqueue child

  // get next node
  dequeue from queue

  // while traversing, if a visited node has no children, add the value to a result.
  if dequeued node has no children
    add value to results

// return the sum
return the results

```

### Code

```javascript

function karyLeafSum(tree) {
  const queue = [];
  const results = 0;

  if (tree.root.children.[0]) {
    queue.enqueue(tree.root);
  } else {
    results += tree.root.value;
  }

  while(queue.length) {
    let current = queue.dequeue;

    // is our current visited node a leaf
    if (!current.children[0]) {
      results += current.value;
    }

    for (let child in current.children) {
      if (child) {
        queue.enqueue(child);
      }
    }
  }
  return results;
}


```

## Review

How is it going in AWS land?

- Daniel: AWS is no very easy to use / get clear feedback from.
  - Tried again later and is now working???
  - AWS does a lot from a UI and integrating everything quickly is sometimes impossible.
- Matt: Is AWS meant to be hard!
  - Getting access denied, using the s3 SDK.
  - We need to make sure that our lambda function has the permissions it needs to access our bucket objects.

Lab Requirements:

## API Gateway (30 mins)

### Integration with Lambdas

## Dynamo DB (30 mins)

- No SQL

### Dynamoose

- ORM
