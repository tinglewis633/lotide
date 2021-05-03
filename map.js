const eqArrays = function (actual, expected) {
  if (actual.join() === expected.join()) {
    return true;
  } else if (actual !== expected) {
    return false;
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: [${actual}] === [${expected}]`;
  } else if (actual !== expected) {
    return `Assertion failed: [${actual}] !== [${expected}]`;
  }
};

const assertArraysEqual = function (actual, expected) {
  return assertEqual(eqArrays(actual, expected), true);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
     results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1,["g","c","t","m","t"])); ///pass
console.log(assertArraysEqual(results1,["c","t","m","t"])); ///fail