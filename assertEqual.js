// FUNCTION IMPLEMENTATION
const mad = String.fromCodePoint(0x1f621);
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: [${actual}] === [${expected}]`;
  } else if (actual !== expected) {
    return `${mad}Assertion failed: [${actual}] !== [${expected}]`;
  }
};

// TEST CODE

console.log(assertEqual(1, 1));
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("satr", "str"));
console.log(assertEqual("satr", "str"));
console.log(assertEqual(1, 2));
