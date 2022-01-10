'use strict';

const reverse = require('../reverse.js');

describe('Testing the reverse array function', () => {
  it('Should reverse an array in place', () => {

    let testArray = [5,4,3,2,1];
    let testResults = reverse(testArray);
    
    expect(testArray).toEqual([1,2,3,4,5]);
    expect(testResults).toBe(testArray);
  });

  it ('should reverse and array of string', () => {

    let testArray = ['one', 'two', 'three'];
    let resultArray = reverse(testArray);

    expect(testArray[0]).toEqual('three');
  });
});
