# Class 13: Message Queue

## Warm Up (20 mins)

* Reverse a singly linked list in-place using a stack.
  * 5 mins on strategy.
  * 5 mins on visualization.

* strategy / algorithm
  * traverse over the the list.
  * push all the values into the stack
    * stack now pop in reverse order!!
* visual

```javascript

function reverse(linkedlist) {

  let stack = [];
  // traverse list and add values to the stack
  let node = linkedlist.head;
  while (node != null) {
    stack.push(node.value);
    // node.value = node.next;
    node = node.next;
  }

  // once completed
  // traverse the list again, and pop values out of the stack and replace `values`
  node = linkedlist.head;
  while (node != null) {
    // stack.push(node.value);
    // node.value = node.next;
    node.value = stack.pop();
    node = node.next;
  }

  return linkedlist;
}
```

## Review (40 mins)

* "Select" Vendor clients for vendor rooms
  * each room should use a vendor id.

## Message Queue (40 mins)

* Some software to ensure caching and delivery of messages / payloads.
  * Add messages
  * confirm messages are received.

## Distributed Application Structure (10 mins)

* Websockets vs socket.io vs HTTP servers
  * Websocket (socket.io-client) can be leveraged in the browser
  * socket.io (socket.io server) can be leveraged within Node to configure event pool.
  * HTTP servers can be depl;oyed to handle discreet between a client and server.
