# DSA 01 - Linked Lists

## Overview

Every week we introduce a New Data Structure and talk about it's applications / behaviors.  They involve abstract concepts.

The code challenges for the next week will use these, but not our labs.  These are help you gain perspective on how to solve problems using just your language.

## Solving problems with Data Structures

Abstract problems, a single specifci solution?  Every problem has some ideas / parameters that are required to solve, but the path is varied.

Storing more than one things in a variable?

```js
let number = 1;

let numbers = [1,2];

numbers.push(3);
```

What / why?

* If JS did not come with a an `Array` how could we store things in the same place.
  * an array has the behavior of "linking" things together, but we as engineers might need to know how do that ourselves.
* Other languages have super weak arrays.
  * Java / C-sharp don't have dynamic arrays.
    * They have to define a size, but developers could use a linked list to move items from one array to the next.
* Unfortunately we in JS can probaly just stick to an array.

* Do we need this on the job?
  * Not exactly but the knowledge will help you solve similar problems.

Analysis - Big Oh.
  
* What makes one function / algorithm better than another?

* What is Big Oh?
  * A way to evaluate the perfromance of an algorithm.
  * The upper bound of time to execute.
  * Used to reach Optimal execution, by looking at the Worst case of efficiency.
    * Given the size of our inputs (n).
  * Uses 2 factors to reach an analysis:
    * time / memory (space)
      * How much time does take to excute and complete a function
      * How much memory / resources are needed from your machine.
      * At this stage in technology computers have a lot of space, and this will not really affect us.

### Input Size

* How large are our parameters?
  * size of a string.
  * size of an array
  * Object containing 2 properties.

#### Example

```js

// (n * n) -> n^2
function analyzeMe(n) {

  let name = 'jacob';

  // this will run n times
  for (let i = 0; i < n: i++) {

    name += i;

    // this will run n times, for every n times.
    for (let j = 0; j < n; j++) }

      name += j;

      console.log(i); // basic operation
    }
  }
}

```

### Binary Search (log(n))

```js
// arr = [1,2,3,4];  word case => 4
function binarySearch(arr){

  // split input in hald and search for result/ data must be sorted.
  let mid = arr.length / 2;

  // compare mid with one index up and one index down.
}
```

## What is a Linked List

A linear series of values, connected by a link.  A storage container much like an array.

## Terminology

* Node: A container that makes up a linked list (among things)
  * value: any data that needs to be linked to somethingse else.
  * next: a property that refers to another node.
* Head: The Node at the beginning of the linked list.
* Singly / Doubly: Singly linked lists has next Nodes that only point one direction, doubly linked lists go 2 directions, have a next and a previous.
* Current Node: What we typically use to refer to the node that is being "read" by a function or algorithm.

## Implementation

We will implent a `Node` class and a `LinkedList` class to encapsulate the properties and behaviors.

## Traversals

Reading all values stored in a Linked List.

```js

// start by assigning a reference to the node we want to start at.
let current = this.head;

// as long as the current node is no a falsey value, we will move to the next node in the list.
while(current) {
  current = current.next;
}

```
