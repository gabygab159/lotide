const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log("These arrays are the same.");
  } else {
    console.log("These arrays are NOT identical.");
  }      
};


module.exports = assertArraysEqual;
