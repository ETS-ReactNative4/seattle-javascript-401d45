'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);

    if (this.front === null) {
      this.front = node;
      this.back = node;
      return;
    } else {
      this.back.next = node;
      this.back = node;
      // let temp = this.back;
      return;
    }
  }

  dequeue() {

    let nodeToRemove = this.front;

    // change front to be the next node!
    this.front = nodeToRemove.next;

    // get rid of the next value from our nodeToRemove
    nodeToRemove.next = null;

    // if this is true, there are no nodes after the front.
    if (!this.front) {
      this.back = null;
    }

    return nodeToRemove.value;
  }

  // return the value at the front of the queue
  peek() {

  }

  // returns a boolean whether or not the Queue is empty
  isEmpty() {

  }
}

let queue = new Queue();

queue.enqueue(20);
queue.enqueue(15);
queue.enqueue(10);

console.log(JSON.stringify(queue));

let num = queue.dequeue(); // => 20;
let num2 = queue.dequeue();
let num3 = queue.dequeue();
console.log(queue, num3);
