'use strict';

const LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash (key) {
    let chars = key.split('');
    let sum = chars.reduce((state, char) => {
      return state + char.charCodeAt(0);
    }, 0);
    let initialHash = sum * 599;
    return initialHash % 1024;
  }

  // efficiency???
  // time O(1) / only if our dynamic structure is built well.
  // space O(1)
  set(key, value) {
    let position = this.hash(key);
    let payload = `${key}:${value}`;

    // we need to check if there is a bucket here
    if (this.buckets[position]) {
      // add our value to the bucket
      let bucket = this.buckets[position];
      bucket.add(payload); // an iniefficient hash could make this run longer / the specifics of LInkedlist adding could make this O(n)
    } else {
      // we should create a new bucket, add our value, and set the bucket at position in our Buckets array.
      let bucket = new LinkedList();
      // we should add both the key and the value
      bucket.add(payload);
      this.buckets[position] = bucket;
    }
  }

  // takes in a key, and returns a value
  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let list = this.buckets[position];
      // we want to find the value associated with our key
      // traverse our linked list / array to find our values

      let currentNode = list.head;
      let [keyFromList, value] = currentNode.value.split(':');
      if (keyFromList === key) {
        return value;
      }
    }
  }

  // return a boolean whether a value exists for a given key
  contains(key) {

  }
}

let table = new HashTable(1024);

// console.log(table.buckets);
// console.log(table.hash('Jacob'));
table.set('Jacob', 31);
table.set('Adrian', 'hello');
table.set('Hexx', 'banana');
// console.log(table);

console.log(table.get('Hexx'));
