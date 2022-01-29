'use strict';

class Node {
  constructor(value, k) {
    this.value = value;
    this.children = new Array(k);
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }
}

let tree = new KaryTree(3);

let root = new Node(13, tree.k);
let node2 = new Node(15, tree.k);
let node3 = new Node(24, tree.k);
let node4 = new Node(34, tree.k);
let node5 = new Node(6, tree.k);
let node6 = new Node(11, tree.k);

tree.root = root;
tree.root.children[0] = node2;
tree.root.children[1] = node3;
tree.root.children[0].children[0] = node4;
tree.root.children[0].children[1] = node5;
tree.root.children[0].children[2] = node6;

breadthFirst(tree.root);


function breadthFirst(root) {

  let queue = [];
  let current = null;
  queue.unshift(root); // adds something to an array on the opposite end of push

  while(queue.length) {
    // move current to the next node in the queue.
    current = queue.pop();

    // read current node
    console.log(current.value);

    // add current nodes children
    for (let child of current.children) {
      if (child) {
        queue.unshift(child);
      }
    }
  }
}
