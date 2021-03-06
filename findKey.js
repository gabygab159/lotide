const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  
  const arrayFromObject = Object.keys(object);
  
  for (let key of arrayFromObject) {
    if (callback(object[key]))
      return key;
    // console.log(object[key])
  }
  
};

let expectedKey = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(expectedKey, "noma");