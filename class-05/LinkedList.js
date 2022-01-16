'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  // take in a value and add it to our linked list
  // efficiency:
  //     time O(n) - linear time efficiency
  //     space O(1) - constant space efficiency
  append(value) {
    // empty linked list {head: null}
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
      return;
    }

    // traversal of a linked list.
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    // currentNode === last Node
    currentNode = node; // this won't work because 
    // we have reached the end when we are out of the loop
  }
}

let list = new LinkedList();
// let node = new Node(value);
// let node2 = new Node(13);
// let node3 = new Node(20);
// let node4 = new Node(33);

// list.head = node
// list.head.next = node2;
// list.head.next.next = node3;
// list.head.next.next.next = node4;

list.add('Jacob');
list.add(13);
list.add(20);
list.add(33);

// describe('testing linked list', () => {
//   it('should have jacob as the head', () => {
//     expect(list.head.value).toEqual('Jacob');
//   });
// });

console.log(JSON.stringify(list));
