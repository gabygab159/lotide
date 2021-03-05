const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
  
    if(arr1[i] !== arr2[i]){
      return false
    }
    
  }
 return true
}

const eqObjects = function(object1, object2) {
  let object1Array = Object.keys(object1);
  let object2Array = Object.keys(object2) 

  if (object1Array.length !== object2Array.length) {
    return false;
  }
  for (let key of object1Array) {
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(eqArrays(object1[key],object2[key]) === false) {
        return false
      }
   } else if(object1[key] !== object2[key]) {
      return false
    } 
  }
  return true
  
};

const assertObjectsEqual = function(actual, expected){

  const inspect = require('util').inspect;
  console.log(`Actual Label: ${inspect(actual)}`)

  if(eqObjects(actual,expected) === true) {
    console.log("These objects are the same!");
  } else {
    console.log("These objects are NOT the same!");
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab,abc);