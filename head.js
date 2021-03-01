const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌: ${actual} !== ${expected}`);
  }


};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("this", "that");
//assertEqual("This", "This");
//assertEqual(9, 1);

const head = function(arr) {
  
  return arr[0];

}

console.log(head([1,3,5,]))
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");