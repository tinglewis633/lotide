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

const middle = function (arr) {
  if (arr.length % 2 === 0) {
    let index = arr.length / 2 - 1;
    return [arr[index], arr[index + 1]];
  }
  if (arr.length % 2 === 1) {
    let index2 = (arr.length + 1) / 2 - 1;
    return arr[index2];
  }
};

//test case
//console.log(middle([1,2,3,4,5])) // 3
//console.log(middle([1,2,"hi",4,5])) //hi
//console.log(middle([1,2,3,3,4,5])) //[3,3]

//console.log(assertArraysEqual(middle([1,2,3,3,4,5]),[3,3])) // true/
