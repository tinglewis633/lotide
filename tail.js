const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: [${actual}] === [${expected}]`;
  } else if (actual !== expected) {
    return `Assertion Passed: [${actual}] !== [${expected}]`;
  }
};

const tail = function (arr) {
  let arr2 = [];
  let i;
  for (i = 1; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
};
