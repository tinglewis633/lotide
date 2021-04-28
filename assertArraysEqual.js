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
