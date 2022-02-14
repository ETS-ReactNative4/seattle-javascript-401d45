# Class 26: React Review - Function Components

## Warm Up (30 mins)

### Prepping for the Final Exam: whiteboard exam in week 9.

### Prompt: Write a function that is given an array of numbers, and creates a valid binary search tree from those numbers

* Questions:
  * Do we need valid Node and Tree class? Yes please return a tree with expected tree and node properties.
  * Empty array? nope always have a length greater than 0.

```js

// Dario and Matt

// Create a class for Node
class Node {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}


// big O: O(n^2)
function traversal(array) {

  let tree = new BinarySearchTree();

  // for of loop, to iterate over array
  for (let number of array) {
    let newNode = new Node(number);
    if (!tree.root) {
      tree.root = newNode;
    }
    let current = tree.root;

    // while loop 
    while (current){
      if (current.value > newNode.value) {
        if (!current.left) {
          current.left = newNode;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = newNode;
        } else {
          current = current.right;
        }
      }
    }
  }

  return tree;
}

```

## React: Conceptual Review (20 mins)

What is React?

* A User Interface Library!
* Open Source
  * Maintained by FB, but all the source code is published.
* A Framework for front end.
* Uses `Components`
  * Small reusable pieces of an interface.
  * Atomic (components shoudl only be as large as their necessary).

What is a Framework vs a Library?

* Libraries assist the features and functionality that you write yourself.
* Frameworks let you add a little bit of your code to a larger code base that handles most of the features and functionality.

## Class Based vs Function Components (20 mins)

React lets you define constructors for rendering Content.

```jsx
// Constructor that needs to crete an object
class Main extends React.Component {
  constructor(props) {
    this.state = {}
  }

  render () {
    return (
      <div>
        {...content}
      </div>
    )
  }
}

```

```jsx
import {useState} from 'react';

// Pure (something no mutatable) function that returns content
function Main(props) {

    let nameState = useState({name: 'Jacob'}); // useState === 'hook'

    return (
         <div>
            {...content}
        </div>
    )
}
```

* We no longer have a instance object that we can refer to by `this`.
* When mutations happened, things like re-render data, and perform functionality on mutation.
* We get better performance with functions than with class components.

### Hooks

* Hooks are pure functions, that "hook" into the React API.
  * Notifies React that something has changes, and React should "react".
  * `useState()` => let's use define some values, and react when they change.
* Hooks can't be used in a Class component because of the importance of 'this'.

## Testing (30mins)

## Sass (30 mins)

* Preprocesed styles:
    SASS -> processed -> CSS

## Lab Prep (15 mins)
