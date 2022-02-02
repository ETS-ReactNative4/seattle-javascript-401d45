'use strict';

function karyLeafSum(tree) {
  let queue = [];
  let result = 0;

  queue.unshift(tree.root);
  while (queue.length) {
    let current = queue.pop();

    if (current.children[0]) {
      for (let child of current.children) {
        if (child) {
          queue.unshift(child);
        }
      }
    } else {
      result += current.value;
    }
  }

  return result;
}

class Node {
  constructor(value, maxChildren = 2) {
    this.value = value;
    this.children = new Array(maxChildren);
  }
}


class KaryTree {
  constructor(k = 2) {
    this.root = null;
    this.k = k;
  }
}

let tree = new KaryTree(3);
tree.root = new Node(6, tree.k);
tree.root.children[0] = new Node(100, tree.k);
tree.root.children[1] = new Node(18, tree.k);
tree.root.children[0].children[0] = new Node(33, tree.k);
tree.root.children[0].children[1] = new Node(2, tree.k);
tree.root.children[1].children[0] = new Node(5, tree.k);

let leafSum = karyLeafSum(tree);
console.log('Sum: ', leafSum); // our sum should be last nodes added as leaves (nodes without children)
