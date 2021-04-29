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

const letterPositions = function (str) {
  let obj = {};
  let arr = [...str];

  console.log(arr);
  for (const element of str) {
    if (obj[element] === undefined && element !== " ") {
      obj[element] = [arr.indexOf(element)];
    } else if (typeof obj[element] === "object") {
      arr[arr.indexOf(element)] = "";
      obj[element].push(arr.indexOf(element));

      console.log(arr);
    }
  }
  return obj;
};

console.log(letterPositions("apple in apple"));
console.log(assertArraysEqual(letterPositions("helleo").e, [1, 4]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
