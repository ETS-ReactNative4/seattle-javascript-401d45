'use strict';

// const $$ = {
//   map: function (array, callback) {
//     let newArr = [];

//     // array.forEach(callback);
//     for (let index in array) {
//       newArr.push(callback(array[index], index));
//     }
//     return newArr;
//   },
// };


let inputArray = [1, 2, 3, 4, 5, 6];

let $$ = {
  callback: function(value, index) {
    return !(value % 2);
  },
  filter: function(structure, callback) {
    let finalArr = [];
    let j = 0;
    for (let i = 0; i < structure.length; i += 1) {
      let goesIntoNewArray = callback(structure[i]);
      if(goesIntoNewArray) {
      //   finalArr.push(callback(array[i]));
        finalArr[j] = structure[i];
        j += 1;
      }
    }
    return finalArr;
  },
  filterWithObject: function(structure, callback) {
    let keys = Object.keys(structure);

    structure[keys[0]]; // using bracket notation
    let newObject = {};


  },
};
/**
 * Test for a filtered array
 */

// let array = [1,2,3,4];
// $$.filter(array, (val,idx) => {
//   return !(val % 2);
// });

/**
 * Test for a filtered object
 */

// let obj = {
//   hot: true,
//   sunny: false,
// };

// $$.map(obj, (key, val) => {
//   return val === true;
// });
