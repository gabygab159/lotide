// const assertEqual = require('../assertEqual');
const tail = require('../tail');

const assert = require('chai').assert;
const result = tail(["Hello", "Lighthouse", "Labs"]);

// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];

// assertEqual(words.length, 3);

describe('#tail', () => {
  it("should return ['or', 'tails'] when given ['heads', 'or', 'tails']", () => {
    assert.deepEqual(tail(['heads', 'or', 'tails']), ['or', 'tails']);
  })
  it("should return [4,3,2,1] when given [5,4,3,2,1]", () => {
    assert.deepEqual(tail([5, 4, 3, 2, 1]), [4, 3, 2, 1]);
  })
})