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


const letterPositions = function(sentence){
  const array = sentence.split('')
  console.log(array);
  const results = {};

    for(let i = 0; i < array.length; i++) {
      if(results[array[i]]){
        results[array[i]] += ", " + i;
      } else {
        results[array[i]] = i + "";
      }
  }
  return results
}
//console.log(letterPositions("Lighthouse Labs"));
//console.log(letterPositions("hello").e, [1]);