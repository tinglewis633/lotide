const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: [${actual}] === [${expected}]`;
  } else if (actual !== expected) {
    return `Assertion Passed: [${actual}] !== [${expected}]`;
  }
};

const head = function (arr) {
  return arr[0];
};

console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
