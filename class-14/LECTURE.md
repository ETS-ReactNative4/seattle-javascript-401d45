# Class 14: Final Event Project

## Warm Up (40 mins)

Prompt: Sort a Linked List of Integers from smallest to largest, using a Queue (Fifo)

Focus on Strategy and Visualization

* How can we sort our list?
  * create some placeholders
  * iterate through the list
    * assign compare to head
    * is compare less than the next, if so we assign to compare.
    * When we get to the end we have the lowest value.
  * Assign the value to `temp`.
    * assign that value to the head node.
    * assign temp to the placeholder reference.

![Linked List Queue Sort](/assets/warm-up.png)

```js

// traverse the list to find the lowest value in the list, add it to a queue.

// traverse the list n times, each time finding the next lowest number, using the back of the queue to compare.
  // enqueue the next lowest value.

// traverse the list a final time to replace all values in the list with the ascending values in the queue.

let list = new LinkedList(20, 3, 6, 1, 2);

let sortedList = list.sort();

consol.log(list, sortedList);

```

## Review (50 mins)

* Conceptual review plus lab 13 review
  * Vital Concepts:
    * Observer Design Pattern (Monday)
      * An observable object that other machine are waiting for things to happen with that object.
        * publisher - send updates to the observable object.
        * subscriber - await updates to the obserbale object.
    * TCP (introduction of socket.io)
      * There another protocol that we can use
      * Socket.io uses the observer pattern, and allows us to send data between publisher and subscribers using TCP.
      * TCP - sustained connection between 2 machines.
        * It can be used to tether information between multiple other machines.
        * Information can travel both ways.
        * It uses `packets` in a stream of data instead of discreet objects (Request, Response)
    * Message Queue
      * Store messages while our data is transfered over TCP, using our event pool.
* Demo from yesterday: the Message Queue.
  * Why are we calling this a Queue (Since it's not a FiFo Queue)?
    * This is to mimic Amazon that there SQS (simple queue service)

## Where are we going from Here? (20 mins) (AWS)

* HTTP Servers
  * request + response
  * Express - middleware(routing)
* Authenticating and Authorizing
* Event Systems (SNS)
  * define an event pool.
  * Notifications.
* Message Queues
  * Simple Queue Service(SQS)
* Micro Severs (lambda);
* Next week we spend about a day in each again only with the AWS version.

## Lab 14 Prep (10 mins)

