const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅: Assertions Passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: Assertion Failed ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  //loop through a string and push each index to an object
  
  let array = str.split("");
  //console.log("array:",array);
  let lettersObject = {};

  for (const letters of array) {
    //console.log("letters:", letters)
    
    if (lettersObject[letters] === undefined) {
      lettersObject[letters] = 1;
    } else {
      lettersObject[letters]++;
    }
  }

  return lettersObject;
};
console.log(countLetters("These are all the letters in the string"));