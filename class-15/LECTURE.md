# Class 15: DSA - Trees

## Review (5mins)

Linked List: linear sequence of Nodes
  * Queue: Apply a ruleset - fifo (first in first out) read in the same order in which nodes were added.
  * Stack: Apply a ruleset - filo (first in last out) read in the reverse order in whcih nodes were added.

## Overview (5mins)

Now we have non-linear organization of nodes, with a hierarchy.  

## Terminology / What is Tree (40mins)

Root - the begeinning of our tree.
Node - still is our container for data, but now we have more than one adjacent.
  * value - data storage
  * left - a child node this sits to the left of the current node.
  * right - a child node that sits to the right of the current node.
  * children - a list or array(iterable) that contain children.
k- the maximum number of nodes in a k-ary tree.
Edge - a connection between 2 nodes, always has a direction.
Leaf - a node with 0 children.
Height - The number from the root to the furthest leaf.
Levels - The height plus 1.

### Types of Trees

Binary Tree - a tree who's nodes only have at maximum 2 children
K-ary - a tree who's nodes have a maximum of k children.
Binary Search Tree - A binary tree whos values are sorted. Usually containing integers, with lower values on the left, and greater values on the right.
  * Balanced Trees: trees that have the left and right subtrees differ by no more than 1.
    * Unbalanced tree are inefficient to traverse.
  * Perfect Tree: has all nodes filled on all levels

## Traversals (50 mins)

We have a lot of variilty in the order in which we read:

Depth First - reading all values from one subtree before looking at values from the other subtree.
  At a given level of a tree we have 3 things to read, the current value, the left value, and the right.
  * Pre-Order: current -> left -> right.
  * In-Order: left -> current -> right.
  * Post-Order: left -> right -> current.
Breadth First - reading all values on the current level before reading values from children levels.
