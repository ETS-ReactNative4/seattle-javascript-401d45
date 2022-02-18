# Class 30: DSA HashTables

## Overview

It's a structure that stores key value pairs, but the location in the structure is determined by a hashing function.

## Terminology

- Hashing: Takes in a key, and returns a location with in the Hash Table. This is a 'deterministic' function, the same input will return the same output.
  - A "perfect" hash will have no collisions.
  - It highly recommended that you use your a more tested hashing algorithm than the one that we write.
- Buckets: Our new Node, this is some other dynamic structure that can handle mutiple values that would belong in this location. An Array or Linked List.
- Collisions:  When a 2 or more keys, hash to the same position in our Table.  The better your hashing algorithm, and the more Buckets you have, you will have fewer collisions.

### Hashing Algorithm

The goal is input a key, and ouput a location in our Table.

- Decide how many buckets you want in your table:  `1024`
- Turn you key into a string (or require it be a string)
  - Convert string character into ASCII value.
  - Sum our ASCII values.
  - Multiply by some large prime number.
  - take that number: % the size (number of buckets)
    - The result is an index / location within the Table.

```javascript

key = "Jacob"
value = 31

ASCIISum = 479

479 * 599 = 286921

286921 % 1024 = 201

// @params {String} - key
function hash(key) {

  let chars = key.split('');
  let sum = chars.reduce((state, char) => {
    return state + char.charCodeAt(0);
  }, 0);

  let initialHash = sum * 599;

  return initialHash % 1024;
}

```

## Implementation
