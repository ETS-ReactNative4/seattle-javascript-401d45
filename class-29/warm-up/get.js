
/**
 *
 * @param {Object} objectToCheck
 * @param {String} nestedProperty
 */

module.exports = function get(objectToCheck, nestedProperty) {
  // nestedProperty is what we are looking for within our objectToCheck

  let keys = nestedProperty.split('.'); // ['pet', 'name']
  let result = {...objectToCheck}; // creates a new object, with preopties from the spreaded object

  for (let key of keys) {
    if (!result.hasOwnProperty(key)){
      return undefined;
    }
    console.log(result, key);
    result = result[key];

    //   get(objectToCheck[key], );
    // }
  }

  console.log(result);
  return result;
  // we want to return something here


  // what are are we doing with the nestedProperty
  // .pet.name <= 'pet.name'

  // objectToCheck.`${nesterProperty}`
};
