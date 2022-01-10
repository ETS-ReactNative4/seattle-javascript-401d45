'use strict'; // gives us strict error handling

function reverse(arr) {

  let start = 0;
  let end = arr.length - 1;

  while(start < end) {

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // this makes sure that my loop ends
    start++;
    end--;
  }

  return arr;
}

module.exports = reverse;
