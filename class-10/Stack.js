'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // what's the efficiency?
  //  O(1) Constant time, 
  //  O(1) Constant space
  push(value) {

    let node = new Node(value);

    // check if the stack is empty???
    if (this.top === null) {
      // make it the top of the stack;
      this.top = node;
      return;
    } else {
      // now what?

      // set node next = this.top;
      node.next = this.top;
      
      // set top = new Node()
      this.top = node; // this is problem
    }
  }

  // remove the top node
  pop() {

    // grab the first node
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }
}

let stack = new Stack();

stack.push(20);
stack.push(15);
console.log(stack);

let num = stack.pop();

console.log(stack, num);

let num2 = stack.pop();

console.log(stack, num2);


