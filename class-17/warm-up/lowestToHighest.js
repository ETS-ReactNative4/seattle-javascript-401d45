'use strict';

/**
 * In Order traversal of a BST returning all values from lowest to highest
 * @param {Node} root 
 * @returns {Array} lowToHigh
 */
function lowestToHighest(root) {
  
  const lowToHigh = [];

  const _inOrder = (node, cb) => {
    if (node.left) {
      _inOrder(node.left, cb);
    }

    cb(node.value);

    if (node.right) {
      _inOrder(node.right, cb);
    }
  };

  _inOrder(root, (value) => lowToHigh.push(value)); 

  return lowToHigh;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

let tree = new BinarySearchTree();

tree.root = new Node(20);
tree.root.left = new Node(15);
tree.root.right = new Node(30);
tree.root.left.right = new Node(18);
tree.root.left.left = new Node(8);
tree.root.right.left = new Node(22);
tree.root.right.right = new Node(35);

let iterable = lowestToHighest(tree.root);
console.log(iterable);
