# Class 19: AWS SNS and SQS

## Warm Up

Prompt: Remove a Node in the middle of a linked list, given the node to remove.

- Singly Linked List.
- Given the whole node(value plus next).

```javascript

// O(1) space
// O(1) time
function removeNode(node) {

  let temp = node.next;
  node.value = temp.value;
  node.next = temp.next;
  temp.next = null;

  // let current = this.head;//  assuming we have access to the list.

  // while (current.next) {

  //   if(current.next.value === node.value) {
  //     current.next = current.next.next;
  //     return this;
  //   }

  //   current = current.next;
  // }

}

```

## Code Review

Daniel: Liking things better than triggering with s3.

- Working CRU, still working on the D.
- How testing with the API Gateway is supposed to contain (event object).

Andrew: The "what" is much clearier with API Gateway rather than triggered from s3.

Erik: Same code does not work for all Lambda tests.

- Create "resource" no working as expected in the test.
- We have records that are created in test, that we may not want in our Production env.

## SNS (30 mins)

Simple notification service acts as an event pool for any other application to use. analagous to socket.io events, SNS calls each event a topic.
  * 

## SQS (30 mins)

## Project Teams (15 mins)

Team 1

- Joey Hernandez
- Jacob Choi
- Michale Hendricks
- Ryan Lee

Team 2

- Andrew
- Keian
- Scott
- Emily

Team 3

- Daniel
- Steve
- Dario
- Michael Metcalf

Team 4

- Kellen
- Matt Miguel
- Erik
- Spencer
- Chris Harden
