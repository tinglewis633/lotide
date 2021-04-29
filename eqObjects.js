// FUNCTION IMPLEMENTATION
const mad = String.fromCodePoint(0x1f621);
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: [${actual}] === [${expected}]`;
  } else if (actual !== expected) {
    return `${mad}Assertion failed: [${actual}] !== [${expected}]`;
  }
};

const eqObjects = function (obj1, obj2) {
  let sentence = [];
  let key1 = Object.keys(obj1);
  let key2 = Object.keys(obj2);
  for (let i = 0; i < key1.length; i++) {
    if (obj1[key1[i]] === obj2[key1[i]]) {
      sentence.push("true");
    } else {
      sentence.push("false");
    }
  }
  for (let k = 0; k < key2.length; k++) {
    if (obj1[key2[k]] === obj2[key2[k]]) {
      sentence.push("true");
    } else {
      sentence.push("false");
    }
  }
  if (sentence.includes("false") === true) {
    return false;
  } else {
    return true;
  }
};

//test
const ab = { a: "1", b: "2", c: "3" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2" };

console.log(eqObjects(ab, abc));
console.log(assertEqual(eqObjects(ab, ba), true)); //Failed
console.log(assertEqual(eqObjects(ab, abc), false)); //Passed
