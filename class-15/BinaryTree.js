class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super(); // calls the inherited constructor
  }

  add() {

  }

  contains() {

  }
}

const tree = new BinaryTree();
let node1 = new Node(13);
let node2 = new Node(15);
let node3 = new Node(24);
let node4 = new Node(34);
let node5 = new Node(6);
let node6 = new Node(11);

tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.left = node4;
tree.root.left.right = node5;
tree.root.right.left = node6;

preOrder(tree.root);
console.log('##################');
inOrder(tree.root);
console.log('##################');
postOrder(tree.root);

/**
 * Recursive function
 *  base case: case in which you do not call yourself
 *  recursuive case: the case in which you call the function again. 
 */
function preOrder(node) {
  
  console.log(node.value);

  if (node.left) {
    preOrder(node.left);
  }
  if (node.right) {
    preOrder(node.right);
  }
}

function inOrder(node) {
  
  if (node.left) {
    inOrder(node.left);
  }

  console.log(node.value);

  if (node.right) {
    inOrder(node.right);
  }

}

function postOrder(node) {

  if (node.left) {
    postOrder(node.left);
  }

  if (node.right) {
    postOrder(node.right);
  }

  console.log(node.value);
}
