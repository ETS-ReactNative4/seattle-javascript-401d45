'use strict';
let array = [1,2,3,4];

function map(value, index) {
  let newArr = [];

  value.forEach((val) => {
    newArr.push(val * val);
  });
  return newArr;
}

let $$ = {
  map: function (array, callback) {
    let newArr = [];

    // array.forEach(callback);
    for (let index in array) {
      newArr.push(callback(array[index], index));
    }
    return newArr;
  },
};

// array.map(callback);

console.log(map(array));

console.log($$.map(array, (val, idx) => {
  return val * val;
}));
