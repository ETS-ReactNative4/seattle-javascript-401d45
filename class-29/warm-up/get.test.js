'use strict';

const get = require('./get');

describe('Testing the get function', () => {
  it('should get a nest property', () => {
    let person = {
      age: 50,
      hair: false,
      pet: {
        name: 'rocky',
        age: 2,
      },
    };

    let spouse = get(person, 'spouse.name'); // undefined
    expect(spouse).toBe(undefined);

    let pet = get(person, 'pet.name'); // rocky
    expect(pet).toBe('rocky');

    let age = get(person, 'pet.age');
    expect(age).toBe(2);
  });
});
