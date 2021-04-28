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

const without = function (arr1, arr2) {
  let i;
  let j;

  let arr3 = [];
  for (i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        const index = arr3.indexOf(arr1[i]);
        if (index > -1) {
          arr3.splice(index, 1);
        }
      }
    }
  }
  return arr3;
};

console.log(without([1, 2, 3], [4, 5, 6, 2, 3, 3, 4, 5, 1])); //empty

console.log(without(["a", "b"], ["a"])); //"b"

console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"])); //true
