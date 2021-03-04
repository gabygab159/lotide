const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }
};



const findKeyByValue = function(tvShowObject, show) {
  const genreKey = Object.keys(tvShowObject);
  //console.log(genreKey)
  //console.log(Object.entries(tvShowObject))
  for (let key of genreKey) {
    if (tvShowObject[key] === show) {
      console.log(key);
      return key;
    }
  }
  
};




const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);