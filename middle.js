const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  
  let middleArray = [];
  
  //find middle of array using %

  //if 1 or 2 elements --> return empty array
  
    if ( arr.length <= 2 ) {
      return middleArray;
    } else if ( arr.length % 2 === 1) {
      //console.log("This is an odd number array -->" , arr)
      middleArray.push(Math.floor(arr.length / 2 + 1));
      //console.log("this is middle array -->",middleArray)
    } else if( arr.length % 2 === 0) {
      //console.log("Even number array -->", arr)
      middleArray.push(Math.floor(arr.length / 2 ));
      middleArray.push(Math.floor(arr.length / 2 + 1));
    }
    
  
  //if arrays with odd number of elements --> return array with one element
  //if array with even number --> return array with to elements
    return middleArray
  
}

module.exports = middle;