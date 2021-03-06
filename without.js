const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
  
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1, arr2) === true) {
    console.log("These arrays are the same.");
  } else {
    console.log("These arrays are NOT identical.");
  }
      
};

const without = function(source, itemsToRemove) {
  
  let newArray = [];
  
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

//console.log(without([2, 1, 3], [1]))
//console.log(without(["1", "2", "3"], [1, 2, "3"]))