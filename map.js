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
    return true
  } else {
    console.log("These arrays are NOT identical.");
    return false
  }      
  
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    //console.log("item BEFORE: ", item);
    //console.log("item AFTER: ", callback(item));
    //console.log('---');
}
return results;  
  
}

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(results1, words))