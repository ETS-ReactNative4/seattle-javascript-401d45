'use strict';

function removeNode(node) {

  if (!node || !node.value) {
    throw new Error('Please pass a valid node')
  }

  let temp = node.next;
  node.value = temp.value;
  node.next = temp.next;
  temp.next = null;

}

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
}

let list = new LinkedList();
let nodeToRemove = new Node(30);

list.head = new Node(20);
list.head.next =  new Node(14);
list.head.next.next = nodeToRemove;
list.head.next.next.next = new Node(13);

console.log(JSON.stringify(list));
removeNode(nodeToRemove);
console.log(JSON.stringify(list)); 
